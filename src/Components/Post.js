import { Avatar } from '@material-ui/core'
import React, { forwardRef, useState,useEffect } from 'react'
import ThumbIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMeOutlined'
import AccountCircleIcon from '@material-ui/icons/AccountCircleOutlined'
import ExpendMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {IconButton,Button} from '@material-ui/core'
import db from '../firebase'
import firebase from 'firebase'
import './Post.css';
import {useStateValue} from '../StateProvider';
import { Link } from 'react-router-dom'
const Post= forwardRef(({postId,profilePic,message,timestamp,imgName,username},ref)=>{
    
     const [{user},dispatch]=useStateValue();
     const [comment,setComment]=useState();
     const[comments,setComments]=useState([]);
     useEffect(()=>{
      if(postId){
        db.collection("posts").doc(postId).collection("comments").onSnapshot((snapshot)=>{
          setComments(snapshot.docs.map((doc)=>doc.data()));
        })
      }
     },[postId])
     const postComment=(e)=>{
       e.preventDefault();
       console.log("comment post");
       db.collection("posts").doc(postId).collection("comments").add({
         message:comment,
         photoURL:user.photoURL,
         username:user.displayName,
         timestamp:firebase.firestore.FieldValue.serverTimestamp()
       })
       setComment('');
     }
     const Collapse=()=>{
       console.log("i am collapse");
       document.getElementsByClassName('post__comment')[0].style.display='none';
       document.getElementsByClassName('post__commentBox')[0].style.display='none';
     }
     return (
        
        <div className='post' ref={ref}>
            <div className='post__top'>
             <Link to={`/Profile/${user.uid}`}><Avatar src={profilePic} className='post__Avatar'/></Link>
             <div className='post__topInfo'>
              <h3>{username}</h3>
              <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
             </div>
             <div className="PGET"><IconButton><MoreHorizIcon/></IconButton></div>
            </div>
            <div className='post__middle'>
              <p>{message}</p>
             
              </div>
                 { imgName?(
                  <div className="post__image">
                    <img src={imgName}/>
                  
                       </div>
                 ):(
                   console.log("no image")
                 )
                }
              
            <div className="Line"></div>
            <div className='post__bottom' id="Comment">
             <div className='post__option'>
               <ThumbIcon/>
               <p>Like</p>
             </div>
             <div className='post__option'  >
               <IconButton onClick={Collapse}><ChatBubbleOutlineIcon /></IconButton>
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
            <div className="post__comment">
              {
              comments.map((comment)=>(
                <>
             <Avatar src={comment.photoURL}/>
             <h3>{comment.username}</h3>
             <p>{comment.message} </p>
             
             <Button className="button">Like</Button>
             <Button className="button">Reply</Button>
             <span className="time">{new Date(comment.timestamp?.toDate()).toUTCString()}</span>
              </>
              ))}
              </div>
            <form className="post__commentBox">
                <Avatar src={user.photoURL}/>
                <input className="post__input"
                  type="text"
                  placeholder="Add comment"
                  value={comment}
                  onChange={(e)=> setComment(e.target.value)}
                />

                <button disabled={!comment} className="post__button" type="submit" onClick={postComment}> post</button>
              </form>
        </div>
    )
}
);
export default Post
