import { Avatar, IconButton,Button } from '@material-ui/core'
import React, { useEffect,useState } from 'react'
import CallIcon from '@material-ui/icons/Call';
import VideocamIcon from '@material-ui/icons/Videocam';
import InfoIcon from '@material-ui/icons/Info';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ImageIcon from '@material-ui/icons/Image';
import  InsertPhotoIcon  from '@material-ui/icons/InsertPhoto';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import SendIcon from '@material-ui/icons/Send';
import {useParams} from 'react-router-dom';
import db from '../firebase';
import './Chat.css';
import {useStateValue} from '../StateProvider';
import firebase from 'firebase';
function Chat() {
    
    const[input,setInput]=useState("");
    const [seed,setseed]=useState("");
    const{roomId}=useParams();
    const [messages,setMessages]=useState([]);
    const[{user},dispatch]=useStateValue();
    console.log("hello i amm room:",roomId);
    const [roomName,setRoomName]=useState("");
    useEffect(()=>{
      if(roomId){
          db.collection('rooms').doc(roomId).
          onSnapshot(snapshot=>setRoomName(snapshot.data().name));
          db.collection('rooms').doc(roomId).collection("messages").orderBy('timestamp','asc').onSnapshot(snapshot=>(
              setMessages(snapshot.docs.map(doc=>doc.data()))
          ))
      }
    },[roomId])
    useEffect(()=>{
      setseed(Math.floor(Math.random()*5000))
    },[])
     
    
    const sendMessage=(e)=>{
        e.preventDefault();
        db.collection('rooms').doc(roomId).collection('messages').add({
            message:input,
            name:user.displayName,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("");
    }
    return (
        <div className="Chat">
            <div className="Chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg` }/>
                <div className="Chat__headerInfo">
                    <h3>{roomName}</h3>

                </div>
                <div className="Chat__headerRight">
                    <IconButton>
                     <CallIcon style={{color:' rgb(135, 201, 197)'}}/>
                    </IconButton>
                    <IconButton>
                     <VideocamIcon style={{color:'  rgb(135, 201, 197)'}}/>
                    </IconButton >
                    <IconButton>
                     <InfoIcon style={{color:'  rgb(135, 201, 197)'}}/>
                    </IconButton>

                </div>

            </div>
            <div className="Chat__body">
                {messages.map(message=>(
                    <p className={`Chat__Message  ${message.name===user.displayName &&"Chat__Reciver"}`}>
                    <span className="Chat__name">{message.name}</span>
                     {message.message}
                    <span className="Chat__timestamp">
                        {new Date(message.timestamp?.toDate()).toUTCString()}
                    </span>
                  </p>
                ))}
                
            </div>
            <div className="Chat__footer">
             <IconButton>
             <AddCircleIcon style={{color:'  rgb(135, 201, 197)'}}/>
             </IconButton>
             <IconButton>
             <ImageIcon style={{color:'  rgb(135, 201, 197)'}}/>
             </IconButton>
             <IconButton><InsertPhotoIcon style={{color:'  rgb(135, 201, 197)'}}/></IconButton>
             <IconButton><GifIcon style={{color:'  rgb(135, 201, 197)'}}/></IconButton>
            
             <form>
                 <input value={input} type="text" placeholder="Aa" onChange={e=>setInput(e.target.value)}/>
                 <EmojiEmotionsIcon/>
                 <IconButton onClick={sendMessage}type="submit"><SendIcon style={{color:'  rgb(135, 201, 197)'}}/></IconButton>
             </form>
             

            </div>
        </div>
    )
}

export default Chat
