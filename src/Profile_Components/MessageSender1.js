import { Avatar, Input } from '@material-ui/core'
import React,{useState} from 'react';

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import FlagIcon from '@material-ui/icons/Flag';
import './MessageSender1.css';
import firebase from 'firebase'
import db from '../firebase'
import axios from '../axios'
import {useStateValue} from '../StateProvider'
import FormData from 'form-data'
const MessageSender1=()=>{
    const [input,setInput]=useState('')
    
    const [imageUrl,setImageurl]=useState(null)
    const [{user},dispatch]=useStateValue()
    const handleChange=(e)=>{
         if(e.target.files[0])
         {setImageurl(e.target.files[0])}
    }
    const handleSubmit= async(e)=>{
        e.preventDefault()
        if(imageUrl){
            const imgForm=new FormData()
            imgForm.append('file',imageUrl,imageUrl.name)
            axios.post('https://facebook-clone-mern1.herokuapp.com/upload/image',imgForm,{
                headers:{
                    'accept':'application/json',
                    'Accept-Language':'en-Us,en;q=0.8',
                    'Content-Type':`multipart/form-data; boundary=${imgForm._boundary}`,
                }
            }).then((res)=>{
                console.log(res.data)
                const postsData={
                    message:input,
                    imgName:res.data.filename,
                    username:user.displayName,
                    profilePic:user.photoURL,
                    timestamp:Date.now()
                }
                console.log(postsData)
                savePost(postsData)
            })
        }
        else{
            const postsData={
                message:input,
                
                username:user.displayName,
                profilePic:user.photoURL,
                timestamp:Date.now()
            }
            console.log(postsData)
                savePost(postsData)
        }
        setImageurl(null)
        setInput('')
    }
    const savePost=async(postsData)=>{
        await axios.post('https://facebook-clone-mern1.herokuapp.com/upload/post',postsData).then((resp)=>{
            console.log(resp)
        })
    }
    return (
        <div className="messageSender1">
                <div className="messageSender__top">
              <Avatar src={user.photoURL}/>
              <form>
            
                 
                  <input type="text" 
                  className='messagesender__input' 
                  placeholder={`what 's going on mind', ${user.displayName}?`} 
                  value={input} 
                  onChange={(e)=>setInput(e.target.value)}/>
                   <PhotoLibraryIcon style={{color:'green'}}>
                    <input type="file" 
                  className='messageSender__File_Selecion'
                  onClick={handleChange}/>
                        </PhotoLibraryIcon>
                  <button onClick={handleSubmit} type='submit'></button>
              </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color:'red'}}/>
                      <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color:'green'}}>
                    <input type="file" 
                  className='messageSender__File_Selecion'
                  onClick={handleChange}/>
                        </PhotoLibraryIcon> 
                    
                      <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <FlagIcon style={{color:'lightblue',fontsize:'2rem'}}/>
                      <h3>FeelingActivity</h3>
                </div>

            </div>
        </div>
    )
}

export default MessageSender1
