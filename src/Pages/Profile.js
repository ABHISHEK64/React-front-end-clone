import React, { Component,useState,useEffect } from 'react';
import './Profile.css';
import Cover from '../Profile_Components/Cover'
import { Link } from '@material-ui/core';
import {useStateValue} from '../StateProvider';
import ProfileFooter from '../Profile_Components/ProfileFooter'
import Profile_Left from '../Profile_Components/Profile_Left';
import Message_Sender1 from '../Profile_Components/MessageSender1';
import Post1 from '../Profile_Components/Post1';
import {db,auth} from '../firebase'
    const Profile=()=>{
        const [posts,setPost]=useState([]);  
        useEffect(()=>{
          db.collection('posts')
          .orderBy("timestamp","desc")
          .onSnapshot((snapshot)=>
          setPost(snapshot.docs.map((doc)=>({id:doc.id,post:doc.data()})))
          )
         },[])  
         const[{user},dispatch]=useStateValue();

      

        return (
            <div class_Name="profile">
                <div className="profile_Header">
                     <Cover/>
                     <h1>{user.displayName}</h1>
                     <Link className="Add_Bio">Add Bio</Link>
                     <ProfileFooter/>    
                </div>
                

                <div className="profile_body">
                <Profile_Left/> 
                <Message_Sender1/>    
                {
                posts.map(({post,id})=>{
                    <Post1
                     key={id}
                     postId={id}
                     profilePic={post.profilePic}
                     message={post.message}
                     timestamp={post.timestamp}
                     imgName={post.imgName}
                     username={post.username } 
                     
                    />
                    
                    
                    
                })}
                <Post1
                profilePic={user.photoURL}
                message="Hey #DBZ LOver"
                timestamp=""
                imgName="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-hxgSPtm15mn2G5MOG8C2y4NXm5ln9zgHhg&usqp=CAU"
                username={user.displayName}
                />
 
                </div>

            </div>
        )
    }
export default Profile;
 