import React ,{ useState,useEffect } from 'react'
import './Profile_Right.css';
import Message_Sender1 from './MessageSender1';

import {useStateValue} from '../StateProvider';
import {db} from '../firebase'
import Post1 from './Post1';
function Profile_Right() {
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
        <div className="Profile_Right"> 
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
    )
}

export default Profile_Right
