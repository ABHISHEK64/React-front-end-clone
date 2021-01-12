import React, { Component,useState } from 'react';
import './Profile.css';
import Cover from '../Profile_Components/Cover'
import { Link } from '@material-ui/core';
import {useStateValue} from '../StateProvider';
import ProfileFooter from '../Profile_Components/ProfileFooter'
 
    const Profile=()=>{
        const[{user},dispatch]=useStateValue();

        return (
            <div class_Name="profile">
                <div className="profile_Header">
                     <Cover/>
                     <h1>{user.displayName}</h1>
                     <Link className="Add_Bio">Add Bio</Link>
                     <ProfileFooter/>
                </div>
            </div>
        )
    }
export default Profile;
 