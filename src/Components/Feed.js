import React,{useState,useEffect} from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from '../firebase'
const Feed=()=> {
    const[posts,setPosts]=useState([]);
      useEffect(() => {
        console.log(posts)
        db.collection("posts").onSnapshot((snapshot)=>
           setPosts(snapshot.docs.map((doc)=>({id: doc.id,
            data:doc.data()})))
        );

        
    }, [])
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender />
            
            {/** backEnd Post Feed */}
            {
                posts.map((post)=>{
                    <Post
                     key={post.id}
                     profilePic={post.data.profilePic}
                     message={post.data.message}
                     timestamp={post.data.timestamp}
                     imgName={post.data.imgName}
                     username={post.data.username } 
                     
                    />
                    console.log("Name:",post.data.username);
                })}
        </div>
    );
}

export default Feed;
