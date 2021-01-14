import React from 'react'
import './Profile_Left.css'
import Profile_Intro from './Profile_Intro';
import Profile_Images from './Profile_Images';
function Profile_Left() {
    return (
        <div className="Profile_Left">
            <Profile_Intro/>
            <Profile_Images/>
        </div>
    )
}

export default Profile_Left
