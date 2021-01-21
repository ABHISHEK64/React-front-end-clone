import React,{useState,useEffect} from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import {db,auth} from '../firebase'
import axios from '../axios'
import Pusher from 'pusher-js'
import FlipMove from 'react-flip-move'
import './Feed.css';

const Feed=() => {
  const [posts,setPost]=useState([]);  
  useEffect(()=>{
    db.collection('posts')
    .orderBy("timestamp","desc")
    .onSnapshot(snapshot=>{
    setPost(snapshot.docs.map(doc=>({
        id:doc.id,
        data:doc.data()})))
    })
   },[])  
  return (
      
        <div className='feed'>
            <StoryReel/>
            <MessageSender />
            
            {/** backEnd Post Feed */}
      
            {
                posts.map(post=>(
                    <Post
                     key={post.id}
                     postId={post.id}
                     profilePic={post.data.profilePic}
                     message={post.data.message}
                     timestamp={post.data.timestamp}
                     imgName={post.data.imgName}
                     username={post.data.username } 
                     noLikes={post.data.NoLikes}
                     PostUserId={post.data.uid}
                    />
                    
                ))
                
                }
                             
        </div>
    );
}

export default Feed;
