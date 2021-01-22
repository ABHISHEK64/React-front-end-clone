import React, { Component,useState,useEffect } from 'react';
import './Profile.css';
import Cover from '../Profile_Components/Cover'
import {Button} from '@material-ui/core';
import {useStateValue} from '../StateProvider';
import ProfileFooter from '../Profile_Components/ProfileFooter'
import Profile_Left from '../Profile_Components/Profile_Left';
import Profile_Right from '../Profile_Components/Profile_Right';
import {db,auth} from '../firebase'
import firebase from 'firebase';
import{Link,useHistory, useParams} from 'react-router-dom';

import $ from 'jquery';
    const Profile=()=>{
        const{username,uid} =useParams();
        const [posts,setPost]=useState([]);  
       const[{user},dispatch]=useStateValue();      
       console.log("user:",username,"userid",uid);
       const history=useHistory();
       const [profileUserData,setProfileUserData]=useState();
       const[bio,setBio]=useState('');
       const[bioPresent,setBioPresent]=useState(false);
       let currentUser=firebase.auth().currentUser;
       useEffect(()=>{
          db.collection('users').doc(uid).onSnapshot((doc)=>{
              setProfileUserData(doc.data());
              console.log('setUserProfe',setProfileUserData,'profile',profileUserData);
          })
       },[])
       const addBio = () => {
        $('.Add_Bio')[0].style.display = 'none';
        $('.bioFields')[0].style.display = 'flex';
    }

    const collapseBio = () => {
        $('.Add_Bio')[0].style.display = 'block';
        $('.bioFields')[0].style.display = 'none';
    }

    const bioSet = (e) => {
        setBio(e.target.value)
        if (101 - e.target.value.length < 0 || e.target.value.length === 0) {
            $('.saveButton')[0].style.backgroundColor = '#3A3B3C';
            $('.saveButton')[0].style.opacity = 0.4;
        } else {
            $('.saveButton')[0].style.opacity = 1;
            $('.saveButton')[0].style.backgroundColor = '#2D88FF';
        }
    }

    const bioUpdate = () => {
        if (101 - bio.length < 0 || bio.length === 0) {
            return;
        } else {
            db.collection('users').doc(uid).update({
                bio: bio
            }).then(
                alert("Pleased reload the page to see your changes")
            )
        }
    }
    useEffect(() => {
        db.collection('users').doc(uid).onSnapshot(doc => {
            if (doc.data().bio && doc.data().bio === "") {
                setBioPresent(false)
            } else {
                setBio(doc.data().bio)
                setBioPresent(true)
            }
        })
    }, [])

    useEffect(() => {
        if (bioPresent === false) {
            console.log()
        } else {
            $('.Add_Bio')[0].innerText = "Edit";
            $('.bioText')[0].innerText = bio;
        }
    }, [bioPresent])


        return (
            <div class_Name="profile">
              
                <div className="profile_Header">
                     <Cover photoURL={user.photoURL} coverURL={user.photoURL} />
                     <h1>{profileUserData?.displayName}</h1>
                     <p className="bioText"></p>
                     <p className="Add_Bio" onClick={addBio}>Add Bio</p>
                     <div className="bioFields">
                    <textarea value={bio} placeholder="Describe who you are" onChange={bioSet} className="bioInput" />
                    <p>{`${101 - bio.length} characters remaining`}</p>
                    <div className="cancelAndSaveButtons">
                        <Button onClick={collapseBio} >Cancel</Button>
                        <Button onClick={bioUpdate} className="saveButton">Save</Button>
                    </div>
                </div>

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
 