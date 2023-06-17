import React from 'react'
import { useEffect, useState } from 'react'
import { collection, setDoc, getDocs, doc } from "firebase/firestore";
import {firestore} from './firebase'
import './style.css'
// props.chatName = the name of the chat instance for each playlist. IE "anime", "rock". Creates one if it doesnt exist.
function LiveChat(props){
    const [messages, setMessages] = useState([])
    // todo: should be able to swap out "anime" for each unique instance. Add prop here
    function scrollToBottom() {
        const chat = document.querySelector('#messageWrapper');
        chat.scrollTop = chat.scrollHeight;
      }
    const chatName = props.chatName
    const db = collection(firestore,chatName)
    const sendMessage = async () => {
        // uses date.now as a unique id
        const messageId = String(Date.now())
        const txt = document.querySelector("#message-field").value
        // todo: get username and add it to username const
        const username = "currentUser"
        const newData = {
            text: txt,
            postedBy: username,
            // id: String(Date.now())
            id: messageId,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }
        await setDoc(doc(db,messageId), newData)
        document.querySelector("#message-field").value = ""
        scrollToBottom()
    }

    // todo: fix this useEffect so it doesn't make 100 reads to the db a second when the dependencies array is removed
    // fetches messages on webpage reload
    // todo: setTimeout
    const getMessages = async () => {
            const data = await getDocs(db);
            const messages = data.docs.map((doc) => doc.data());
            setMessages(messages);
            }
     setTimeout(getMessages, 2000)
    // todo: the dependency array makes it so you can only see new messages

    return (
        
    <div>
        <div id="messageWrapper">
          {messages.map((message) => (
            <div className={(message.postedBy==="currentUser")?'sentMessage':"recievedMessage"} key={message.id}>{message.postedBy}: {message.text}</div>
          ))}
        </div>
        <div>
            <form>
            <input id="message-field"/>
            <button type="button" onClick={sendMessage}>Send</button>
            </form>
        </div>
    </div>
      );
}

export default LiveChat

// todo: add timestamps
// todo: add live users