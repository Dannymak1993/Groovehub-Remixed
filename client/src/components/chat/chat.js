import React, { useEffect, useState } from 'react';
import { database, auth } from './firebase';
import jwt_decode from 'jwt-decode';
import './style.css'; // assuming styles are saved in styles.css

function LiveChat(props) {
  const { playlistId, userId } = props;
  const [username, setUsername] = useState("defaultUser");
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [uniqueUsers, setUniqueUsers] = useState([]);

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

    if (action === "enter") {
      userPresenceRef.set(true);
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
        users.push(child.key);
      });
    }
    setUniqueUsers(users);
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
      // disconnect event is automatically handled by Firebase
    };
  }, []);

  return (
    <div>
      <div id="messageWrapper">
        {messages.map((message, index) => (
          <div key={index} className={message.postedBy === username ? "sentMessage" : "recievedMessage"}>
            {`(${formatTimestamp(message.timestamp)}) ${message.postedBy}:  ${message.text}`}
          </div>
        ))}
      </div>
      <div>
        <p>Number of active users: {uniqueUsers.length}</p>
        <form onSubmit={sendMessage}>
          <input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
  
  async function getUsername() {
    // Retrieve and decode the token to get the username
    // This code is dependent on the structure of your token
    const token = localStorage.getItem('id_token');
    if (!token) {
      return "defaultUser";
    }
  
    try {
      const decodedToken = jwt_decode(token);
      return decodedToken.data.username; // assuming username is stored in the decoded token
    } catch (err) {
      console.error('Failed to decode token', err);
      return "defaultUser";
    }
  }

  function formatTimestamp(timestamp) {
    // Format the timestamp into a readable string
    // This code may need to be adjusted depending on your timestamp format
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
