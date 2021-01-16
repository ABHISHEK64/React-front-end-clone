import { Avatar, IconButton, Input } from '@material-ui/core'
import React,{useState} from 'react';

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmotionIcon from '@material-ui/icons/InsertEmoticon';
import './MessageSender.css';
import firebase from 'firebase'
import db from '../firebase'
import axios from '../axios'
import {useStateValue} from '../StateProvider'
import FormData from 'form-data'
const MessageSender=()=>{
    const [input,setInput]=useState("")
    
    const [imageUrl,setImageurl]=useState("")
    const [{user},dispatch]=useStateValue()
   
    const handleSubmit= async(e)=>{
        e.preventDefault();
    
            db.collection('posts').add({
                username:user.displayName,
                profilePic:user.photoURL,
                message:input,
                imgName:imageUrl,
                timestamp:firebase.firestore.FieldValue.serverTimestamp()

            });
        
               
        setImageurl("");
        setInput("");
    }
    
    
    return (
        <div className="messageSender">
            <div className="messageSender__top">
              <Avatar src={user.photoURL}/>
              <form>
                  <input 
                  className='messagesender__input' 
                  placeholder={`what 's going on mind', ${user.displayName}?`} 
                  value={input} 
                  onChange={(e)=>setInput(e.target.value)}/>
                    <input  
                     value={imageUrl}
                  className='messageSender__File_Selecion'
                
                  onChange={(e)=>setImageurl(e.target.value)}
                  
                  placeholder='imageUrl Optional'/>
                  {/*<IconButton type="file" onClick={handleChange}><PhotoLibraryIcon/></IconButton>*/    }  

                  <button onClick={handleSubmit} type='submit'></button>
              </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color:'red'}}/>
                      <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color:'green'}}/>
                 
                    
                      <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmotionIcon style={{color:'orange'}}/>
                      <h3>FeelingActivity</h3>
                </div>

            </div>
        </div>
    )
}

export default MessageSender
