import React, { useEffect, useState, useRef } from 'react';
import firebase, { database, auth } from './firebase';
// import { database, auth } from './firebase';
import jwt_decode from 'jwt-decode';
import './style.css';

function LiveChat(props) {
  const { playlistId, userId } = props;
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [uniqueUsers, setUniqueUsers] = useState([]);
  const messageEndRef = useRef(null);

  //this state keeps track of whether the user list popup is open or not
  const [isUserListOpen, setIsUserListOpen] = useState(false);
  //this function toggles user state
  const toggleUserList = () => {
    setIsUserListOpen(!isUserListOpen);
  };


  // Instead of getting username on each render, we set it once in state.
  const [username, setUsername] = useState('defaultUser');
  useEffect(() => {
    getUsername().then(name => setUsername(name));
  }, []);

  //Modified this function to use firebase's time stamp instead of Date.now()
  const sendMessage = async (event) => {
    event.preventDefault();
    const newData = {
      text: newMessage,
      postedBy: username,
      timestamp: firebase.database.ServerValue.TIMESTAMP // Use Firebase server's timestamp
    }
    await database.ref(`chat_${playlistId}`).push(newData);
    setNewMessage("");
  }

  const trackUserPresence = (action) => {
    const userPresenceRef = database.ref(`chat_${playlistId}/presence/${userId}`);
    if (action === "enter") {
      userPresenceRef.set({ username, present: true });
      userPresenceRef.onDisconnect().remove();
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
        users.push(child.val().username); // Using updated presence node
      });
    }
    setUniqueUsers(users);
  }

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    trackUserPresence("enter");
    const messageRef = database.ref(`chat_${playlistId}`).orderByChild("timestamp");
    messageRef.on("value", messageCallback);
    const presenceRef = database.ref(`chat_${playlistId}/presence`);
    presenceRef.on("value", presenceCallback);
    return () => {
      messageRef.off("value", messageCallback);
      presenceRef.off("value", presenceCallback);
    };
  }, [playlistId, username]); // Added username to dependency array

  useEffect(scrollToBottom, [messages]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      sendMessage(event);
    }
  }

  return (
    <div className="chat-container">
      <div id="messageWrapper">
        {messages.map((message) => (
          <div key={message.timestamp} className={message.postedBy === username ? "sentMessage" : "recievedMessage"}>
            {`(${formatTimestamp(message.timestamp)}) ${message.postedBy}:  ${message.text}`}
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>
      
      <button className="userCount" onClick={toggleUserList}>{`Online Users: ${uniqueUsers.length}`}</button>
      {isUserListOpen && (
        <div className="userList">
          {uniqueUsers.map((user) => (
            <p key={user}>{user}</p>
          ))}
        </div>
      )}

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
