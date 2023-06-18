import React, { useEffect, useState } from 'react';
import { collection, addDoc, onSnapshot, orderBy, query } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { firestore } from './firebase'
import './style.css'

function LiveChat(props) {
  const { playlistId } = props;
  const [db, setDb] = useState(null);

  useEffect(() => {
    setDb(collection(firestore, `chat_${playlistId}`));
  }, [firestore, playlistId]);

  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("currentUser");
  const [newMessage, setNewMessage] = useState("");

  const scrollToBottom = () => {
    const chat = document.querySelector('#messageWrapper');
    chat.scrollTop = chat.scrollHeight;
  }

  const sendMessage = async (event) => {
    event.preventDefault();
    const messageId = String(Date.now())
    const newData = {
      text: newMessage,
      postedBy: username,
      id: messageId,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    }
    await addDoc(db, newData);
    setNewMessage("");
    scrollToBottom();
  }

  useEffect(() => {
    if (db) {
      getUsername().then(name => setUsername(name));

      const q = query(db, orderBy("timestamp"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let loadedMessages = [];
        querySnapshot.forEach((doc) => {
          loadedMessages.push(doc.data());
        });
        setMessages(loadedMessages);
        scrollToBottom();
      });

      return () => {
        unsubscribe();
      };
    }
  }, [db]);

  return (
    <div>
      <div id="messageWrapper">
        {messages.map((message) => (
          <div className={(message.postedBy === username) ? 'sentMessage' : "recievedMessage"} key={message.id}>
            {`${message.postedBy}: ${message.text} (${formatTimestamp(message.timestamp)})`}
          </div>
        ))}
      </div>
      <div>
        <form onSubmit={sendMessage}>
          <input id="message-field" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

async function getUsername() {
  // implement API call to get username here
  // then return the username. For now, we're returning a default username
  return "defaultUser";
}

function formatTimestamp(firebaseTimestamp) {
  const timestamp = firebaseTimestamp?.toDate(); // this may be different depending on your timestamp format
  if (!timestamp) {
    return '';
  }

  let hours = timestamp.getHours();
  const minutes = String(timestamp.getMinutes()).padStart(2, '0');
  const period = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  const hoursFormatted = String(hours).padStart(2, '0');
  return `${hoursFormatted}:${minutes} ${period}`;
}

export default LiveChat;
