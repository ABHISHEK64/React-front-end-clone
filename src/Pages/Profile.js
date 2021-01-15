import React, { Component,useState,useEffect } from 'react';
import './Profile.css';
import Cover from '../Profile_Components/Cover'
import { Link } from '@material-ui/core';
import {useStateValue} from '../StateProvider';
import ProfileFooter from '../Profile_Components/ProfileFooter'
import Profile_Left from '../Profile_Components/Profile_Left';
import Profile_Right from '../Profile_Components/Profile_Right';
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
                <Profile_Right/> 

                </div>

            </div>
        )
    }
export default Profile;
 