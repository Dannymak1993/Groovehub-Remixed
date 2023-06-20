import React, { useEffect, useState, useRef } from 'react';
import { database, auth } from './firebase';
import jwt_decode from 'jwt-decode';
import './style.css';

function LiveChat(props) {
  const { playlistId, userId } = props;
  const [username, setUsername] = useState("defaultUser");
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [uniqueUsers, setUniqueUsers] = useState([]);
  const messageEndRef = useRef(null);

  const sendMessage = async (event) => {
    event.preventDefault();
    const newData = {
      text: newMessage,
      postedBy: username,
      timestamp: Date.now()
    }
    await database.ref(`chat_${playlistId}`).push(newData);
    setNewMessage("");
  }

  const trackUserPresence = (action) => {
    const userPresenceRef = database.ref(`chat_${playlistId}/presence/${userId}`);
    const usernameRef = database.ref(`chat_${playlistId}/usernames/${userId}`);
    if (action === "enter") {
      userPresenceRef.set(true);
      userPresenceRef.onDisconnect().remove();
      usernameRef.set(username);
      usernameRef.onDisconnect().remove();
    }
  }

  const messageCallback = (snapshot) => {
    let loadedMessages = [];
    if (snapshot.exists()) {
      snapshot.forEach((child) => {
        if (child.key !== "presence") {
          loadedMessages.push(child.val());
        }
      });
    }
    setMessages(loadedMessages);
  }

  const presenceCallback = (snapshot) => {
    const users = [];
    if (snapshot.exists()) {
      snapshot.forEach((child) => {
        database.ref(`chat_${playlistId}/usernames/${child.key}`).once('value')
          .then(usernameSnapshot => {
            users.push(usernameSnapshot.val());
            setUniqueUsers(users);
          });
      });
    }
  }

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    getUsername().then(name => setUsername(name));
    trackUserPresence("enter");
    const messageRef = database.ref(`chat_${playlistId}`).orderByChild("timestamp");
    messageRef.on("value", messageCallback);
    const presenceRef = database.ref(`chat_${playlistId}/presence`);
    presenceRef.on("value", presenceCallback);
    return () => {
      messageRef.off("value", messageCallback);
      presenceRef.off("value", presenceCallback);
    };
  }, [playlistId]);

  useEffect(scrollToBottom, [messages]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      sendMessage(event);
    }
  }

  return (
    <div className="chat-container">
      <div id="messageWrapper">
        {messages.map((message, index) => (
          <div key={index} className={message.postedBy === username ? "sentMessage" : "recievedMessage"}>
            {`(${formatTimestamp(message.timestamp)}) ${message.postedBy}:  ${message.text}`}
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>
      <p className="userCount">{`Online Users: ${uniqueUsers.length}`}</p>
      {/* <div className="userList">
        {uniqueUsers.map((user, index) => (
          <p key={index}>{user}</p>
        ))}
      </div> */}
      <div className="form">
        <input value={newMessage} onKeyPress={handleKeyPress} onChange={(e) => setNewMessage(e.target.value)} />
        <button type="submit" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );

  async function getUsername() {
    const token = localStorage.getItem('id_token');
    if (!token) {
      return "defaultUser";
    }
    try {
      const decodedToken = jwt_decode(token);
      return decodedToken.data.username;
    } catch (err) {
      console.error('Failed to decode token', err);
      return "defaultUser";
    }
  }

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const hoursFormatted = String(hours).padStart(2, '0');
    return `${hoursFormatted}:${minutes} ${period}`;
  }
}

export default LiveChat;
