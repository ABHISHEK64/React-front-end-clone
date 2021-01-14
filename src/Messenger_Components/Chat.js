import { Avatar, IconButton } from '@material-ui/core'
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
import './Chat.css'
function Chat() {
    const [seed,setseed]=useState("");
    useEffect(()=>{
      setseed(Math.floor(Math.random()*5000))
    },[])
    return (
        <div className="Chat">
            <div className="Chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg` }/>
                <div className="Chat__headerInfo">
                    <h3>Room Name</h3>

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
             <AddCircleIcon/>
             <ImageIcon/>
             < InsertPhotoIcon/>
             <GifIcon/>
             <form>
                 <input type="text" placeholder="Aa"/>
             </form>
            <EmojiEmotionsIcon/>
            <ThumbUpIcon/>
            </div>
        </div>
    )
}

export default Chat
