import React ,{ useState,useEffect } from 'react'
import './Profile_Right.css';
import Message_Sender1 from './MessageSender1';

import {useStateValue} from '../StateProvider';
import {db} from '../firebase'
import Post1 from './Post1';
import {useParams} from 'react-router-dom'
function Profile_Right() {
   // const [posts,setPost]=useState([]);  
         
  const[{user},dispatch]=useStateValue();
  const {username,uid}=useParams();
  const [profileUserData,setProfileUserData]=useState();
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
  useEffect(()=>{
      db.collection('users').doc(uid).onSnapshot((doc)=>{
          setProfileUserData(doc.data());
      })
  })
  console.log("username",username)
    return (
        <div className="Profile_Right"> 
               { profileUserData?.displayName=== user?.displayName ?(<Message_Sender1/>):(console.log('diffrent USER')) }   
                {
                posts.map(post=>{
                    post.data.username===user?.displayName?(

                        <Post1
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
                          
                    ):( 
                        console.log()
                     
                    )
                    
                    
                    
                })
                }
                
 
        </div>
    )
}

export default Profile_Right
