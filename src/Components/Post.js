import { Avatar } from '@material-ui/core'
import React from 'react'
import ThumbIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMeOutlined'
import AccountCircleIcon from '@material-ui/icons/AccountCircleOutlined'
import ExpendMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
import './Post.css'
const Post=({profilePic,message,timestamp,imgName,username})=> {
  
  
     return (
        
        <div className='post'>
            <div className='post__top'>
             <Avatar src={profilePic} className='post__Avatar'/>
             <div className='post__topInfo'>
              <h3>{username}</h3>
              <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
             </div>
            </div>
            <div className='post__middle'>
              <p>{message}</p>
              <img src={imgName} alt=""/>
              </div>
            <div className='post__image'>
             
              </div>  
            <div className='post__bottom'>
             <div className='post__option'>
               <ThumbIcon/>
               <p>Like</p>
             </div>
             <div className='post__option'>
               <ChatBubbleOutlineIcon/>
               <p>Comment</p>
             </div>
             <div className='post__option'>
               <NearMeIcon/>
               <p>Share</p>
             </div>
             <div className='post__option'>
               <AccountCircleIcon/>
               <ExpendMoreOutlined/>
             </div>
            </div>
            
        </div>
    )
}

export default Post
