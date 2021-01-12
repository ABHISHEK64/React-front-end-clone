import React from 'react'
import  './Cover.css'
import {Avatar, Button} from '@material-ui/core';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import {useStateValue} from '../StateProvider';
function Cover() {
    const[{user},dispatch]=useStateValue();
    return (
        <>
        <div className="Cover_Pic">
            <img className="Cover_IMG" src="https://cdn.trinikid.com/109309/uploads/18997390-8174-11e9-887b-4d27ca3bec1e_800_420.jpeg"/>
        </div>
        <div className="User">
        <Avatar src={user.photoURL} className="user_profile"/>
        <Button className="Camera_icon"><CameraAltIcon className="Camera"/></Button>
        <Button className="Camera_cover"><CameraAltIcon className="Camera2"/> <h6>Edit Cover Photo</h6></Button>
        </div>
        </>
    )
}

export default Cover
