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
import './Chat.css'
function Chat() {
    const[input,setInput]=useState("");
    const [seed,setseed]=useState("");
    const{roomId}=useParams();
    const [roomName,setRoomName]=useState("");
    useEffect(()=>{
      if(roomId){
          db.collection('rooms').doc(roomId).
          onSnapshot(snapshot=>setRoomName(snapshot.data().name));
      }
    },[roomId])
    useEffect(()=>{
      setseed(Math.floor(Math.random()*5000))
    },[])

    
    const sendMessage=(e)=>{
        e.preventDefault();
        console.log("input");
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
                <p className={`Chat__Message  ${true &&`Chat__Reciver`}`}>
                      <span className="Chat__name">Abhishek Sachan</span>
                      Heyy Guys
                      <span className="Chat__timestamp">3:58AM</span>
                </p>
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
