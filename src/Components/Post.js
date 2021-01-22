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
import { post } from 'jquery'
const Post= forwardRef(({postId,profilePic,message,timestamp,imgName,username,PostUserId,noLikes},ref)=>{
    
     const [{user},dispatch]=useStateValue();
     const [comment,setComment]=useState();
     const[comments,setComments]=useState([]);
     const [show,setShow]=useState('like2');
     const [show2,setShow2]=useState('textforlike2');
     const[postUser,setPostUser]=useState();
     const[posterImage,setPosterImage]=useState()
     //Comment
     useEffect(()=>{
       let unSubscribe;
      if(postId){
        unSubscribe=db.collection("posts").doc(postId).collection("comments").orderBy("timestamp","desc").onSnapshot((snapshot)=>{
          setComments(snapshot.docs.map((doc)=>doc.data()));
        })
      }
      return()=>{
        unSubscribe();
      }
     },[postId])
     //user credential who post image
     useEffect(()=>{
       if(PostUserId){
         db.collection('users').doc(PostUserId).onSnapshot((snapshot)=>{
           setPostUser(snapshot.data())
         })
       }
     },[PostUserId])
     //Like function
     useEffect(()=>{
       db.collection("posts")
       .doc(postId)
       .collection('Likes')
       .doc(user.uid)
       .get()
       .then(doc2=>{
         if(doc2.data()){
           if(show=='like2'){
             setShow(show=='like2 blue')
             setShow(show=='text forlike bluetextforvalue')
           }
           else{
             setShow('like2')
             setShow2('textforlike')
           }
         }
       })
     },[postId,user.uid])
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
     useEffect(()=>{
       if(PostUserId){
         db.collection('users').doc(PostUserId).onSnapshot((snapshot)=>{
              setPosterImage(snapshot.data.photoURL)
         })
       }
     })
     const Collapse=()=>{
       console.log("i am collapse");
       document.getElementsByClassName('post__comment')[0].style.display='block';
       document.getElementsByClassName('post__commentBox')[0].style.display='flex';
     }
     const LikeHandle=(event)=>{
       event.preventDefault();
       if(show=='like2'){
         setShow('like2 blue')
         setShow2('textforlike blluetextforlike')
       }
       else{
         setShow('like2')
         setShow2('textforlike')
       }
       db.collection('posts').doc(postId).get().then(docc=>{const data=docc.data()
       console.log(show)
       if(show=='like2'){
         db.collection('posts').doc(postId).collection("Likes").doc(user.uid).get().then(doc2=>{if(doc2.data()){
           console.log("Doc2:",doc2.data())
         }
         else{
          db.collection('posts').doc(postId).collection("Likes").doc(user.uid).set({
            Like:1
          });
           db.collection('posts') .doc(postId).update({
             NoLikes:data.NoLikes+1
           });
           
         }
        })
       }
       else{
        db.collection('posts').doc(postId).collection("Likes").doc(user.uid).delete().then((doc2)=>{
          db.collection('posts').doc(postId).update({
            NoLikes:data.NoLikes-1
          });
        });

       }
      })
     }
     return (
        
        <div className='post1' ref={ref}>
            <div className='post__top'>
             <Link to={`/Profile/${username}/${PostUserId}`}><Avatar src={profilePic} className='post__Avatar'/></Link>
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
            <p className='LikePara'>{noLikes}{noLikes==1?"Like":"Likes"}</p>
            <div className='post__bottom' id="Comment">
             <div className='post__option  like'>
             <IconButton onClick={LikeHandle}> <ThumbIcon className={show}/> </IconButton>
               <p className={show}>Like</p>
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
             <h3>{comment.username}</h3>
             <Avatar src={comment.photoURL}/>
             
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
