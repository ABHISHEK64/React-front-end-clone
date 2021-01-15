import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import ThumbIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMeOutlined'
import AccountCircleIcon from '@material-ui/icons/AccountCircleOutlined'
import ExpendMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import db from '../firebase'
import './Post1.css'
const Post= forwardRef(({key,postID,profilePic,message,timestamp,imgName,username},ref)=>{
     console.log(username);
     
     return (
        
        <div className='post1' ref={ref}>
            <div className='post1__top'>
             <Avatar src={profilePic} className='post__Avatar'/>
             <div className='post1__topInfo'>
              <h3>{username}</h3>
              <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
             </div>
             <div className="PGET"><MoreHorizIcon/></div>
            </div>
            <div className='post1__middle'>
              <p>{message}</p>
              
              </div>
        
                  <div className="post1__image">
                    <img src={imgName}/>
                  
                       </div>

              
            <div className="Line"></div>
            <div className='post1__bottom'>
             <div className='post1__option'>
               <ThumbIcon/>
               <p>Like</p>
             </div>
             <div className='post1__option'>
               <ChatBubbleOutlineIcon/>
               <p>Comment</p>
             </div>
             <div className='post1__option'>
               <NearMeIcon/>
               <p>Share</p>
             </div>
             <div className='post1__option'>
               <AccountCircleIcon/>
               <ExpendMoreOutlined/>
             </div>
            </div>
            
        </div>
    )
}
);
export default Post
