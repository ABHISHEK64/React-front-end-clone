import React ,{ useState,useEffect } from 'react'
import './Profile_Right.css';
import Message_Sender1 from './MessageSender1';

import {useStateValue} from '../StateProvider';
import {db} from '../firebase'
import Post1 from './Post1';
function Profile_Right() {
    const [posts,setPost]=useState([]);  
         
  const[{user},dispatch]=useStateValue();
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
        <div className="Profile_Right"> 
                <Message_Sender1/>    
                {
                posts.map(post=>{
                    <Post1
                     key={post.id}
                     postId={post.id}
                     profilePic={user.photoURL}
                     message={post.data.message}
                     timestamp={post.data.timestamp}
                     imgName={post.data.imgName}
                     username={user.displayName} 
                     
                     
                    />
                    
                    
                    
                })
                }
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
