import { Avatar, IconButton, Input } from '@material-ui/core'
import React,{useState,useEffect} from 'react';

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmotionIcon from '@material-ui/icons/InsertEmoticon';
import './MessageSender.css';
import firebase from 'firebase'
import db from '../firebase'
import axios from '../axios'
import {useStateValue} from '../StateProvider'
import FormData from 'form-data'
import {useHistory,useParams}  from 'react-router-dom';
const MessageSender=()=>{
    
    const [input,setInput]=useState('')
    
    const [imageUrl,setImageurl]=useState('')
    const [{user},dispatch]=useStateValue()
    const history=useHistory();
    if(user===null){
        history.push('/');
      }
      const [profileUserData,setProfileUserData]=useState();
      const{username,uid} =useParams();

    //let currentUser=firebase.auth().currentUser;
       useEffect(()=>{
          db.collection('users').doc(uid).onSnapshot((doc)=>{
              setProfileUserData(doc.data());
          })
       },[]);

      const user1=firebase.auth().currentUser;
      const [noLikes,setNoLikes]=useState(0);
    const handleSubmit= async(e)=>{
        e.preventDefault();
    
            db.collection('posts').add({
                username:user.displayName,
                profilePic:user.photoURL,
                message:input,
                imgName:imageUrl,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                NoLikes:noLikes,
                uid:user1?.uid
            });
        
               
        setImageurl('');
        setInput('');
    }
    
    
    return (
        <div className="messageSender">
            <div className="messageSender__top">
              <Avatar src={user.photoURL}/>
              <form>
                  <input 
                  className='messagesender__input' 
                  type="text"
                  placeholder={`what 's going on mind', ${user.displayName}?`} 
                  value={input} 
                  onChange={(e)=>setInput(e.target.value)}/>
                  <input 
                  className='messagesender__imgae' 
                  type="text"
                  placeholder={`want to share your image enter image url, ${user.displayName}?`} 
                  value={imageUrl} 
                  onChange={(e)=>setImageurl(e.target.value)}/>
                    
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
