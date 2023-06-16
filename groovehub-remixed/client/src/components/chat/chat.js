import React from 'react'
import { useEffect, useState } from 'react'
import { collection, setDoc, getDocs, doc } from "firebase/firestore";
import {firestore} from './firebase'
import './style.css'
// props.chatName = the name of the chat instance for each playlist. IE "anime", "rock". Creates one if it doesnt exist.
function LiveChat(props){
    const [messages, setMessages] = useState([])
    // todo: should be able to swap out "anime" for each unique instance. Add prop here
    const chatName = props.chatName
    const db = collection(firestore,chatName)
    const sendMessage = async () => {
        // uses date.now as a unique id
        const messageId = String(Date.now())
        const txt = document.querySelector("#message-field").value
        // todo: get username and add it to username const
        const username = "sam"
        const newData = {
            text: txt,
            postedBy: username,
            id: String(Date.now())
        }
        await setDoc(doc(db,messageId), newData)
        document.querySelector("#message-field").value = ""
    }

    // todo: fix this useEffect so it doesn't make 100 reads to the db a second when the dependencies array is removed
    // fetches messages on webpage reload
    useEffect(()=>{
        const getMessages = async () => {
            const data = await getDocs(db);
            const messages = data.docs.map((doc) => doc.data());
            setMessages(messages);
            }
        getMessages()
    },[])
    // todo: the dependency array makes it so you can only see new messages

    return (
        
    <div>
        <div id="messageWrapper">
          {messages.map((message) => (
            <div className={(message.postedBy==="currentUser")?'sentMessage':"recievedMessage"} key={message.text}>{message.postedBy}: {message.text}</div>
          ))}
        </div>
        <div>
            <form>
            <input id="message-field"/>
            <button type="button" onClick={sendMessage}>Submit</button>
            </form>
        </div>
    </div>
      );
}

export default LiveChat