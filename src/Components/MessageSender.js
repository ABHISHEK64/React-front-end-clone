import { Avatar, Input } from '@material-ui/core'
import React,{useState} from 'react';

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmotionIcon from '@material-ui/icons/InsertEmoticon';
import './MessageSender.css';
import firebase from 'firebase'
import db from '../firebase'
import Axios from '../Axios'
import {useStateValue} from '../StateProvider'

const MessageSender=()=>{
    const [input,setInput]=useState('')
    
    const [imageUrl,setImageurl]=useState('')
    const [{user}]=useStateValue()
    
    const handleSubmit= async(e)=>{
        e.preventDefault()
        db.collection('posts').add({
            message:input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL,
            username:user.displayName,
            imgName:imageUrl
        })
        setImageurl('')
        setInput('')
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
              <Avatar src={user.photoURL}/>
              <form>
                  <input type="text" 
                  className='messagesender__input' 
                  placeholder={`what 's going on mind', ${user.displayName}?`} 
                  value={input} 
                  onChange={(e)=>setInput(e.target.value)}/>
                  <input type="file" 
                  className='messageSender__File_Selecion'
                  value={imageUrl} 
                  onChange={(e)=> setImageurl(e.target.value)}/>
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
