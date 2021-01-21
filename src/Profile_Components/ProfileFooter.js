import React,{useEffect,useState} from 'react'
import './ProfileFooter.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link,useParams} from 'react-router-dom';
import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {db,auth} from '../firebase';
import{useStateValue} from '../StateProvider';
import firebase from 'firebase';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
function ProfileFooter() {
    const[{user},dispatch]=useStateValue();      
    const{username,uid} =useParams();
    const [profileUserData,setProfileUserData]=useState();
    let currentUser=firebase.auth().currentUser;
       useEffect(()=>{
          db.collection('users').doc(uid).onSnapshot((doc)=>{
              setProfileUserData(doc.data());
          })
       },[]);

       if(profileUserData!==undefined){
           if(profileUserData?.displayName!==user?.displayName){
                  console.log('user Not same');
                  document.getElementsByClassName('EditProfile')[0].style.opacity=0;
                  document.getElementsByClassName('AddFriend')[0].style.opacity=1;
           }
           else{
            console.log('user  same');
            document.getElementsByClassName('EditProfile')[0].style.opacity=1;
            document.getElementsByClassName('AddFriend')[0].style.display=0;
           }
       }
    return (
        <div className="ProfileFooter">
            <div className="ProfileFooter_Left">
              <ul className="ProfileLink">
                  <li><div className="Link_Item"><Link className="Link"  style={{color:'gray'}}>Post</Link></div></li>
                  <li><div className="Link_Item"><Link className="Link" style={{color:'gray'}}>About</Link></div></li>
                  <li><div className="Link_Item"><Link className="Link" style={{color:'gray'}}>Friends</Link></div></li>
                  <li><div className="Link_Item"><Link className="Link" style={{color:'gray'}}>Photos</Link></div></li>
                  <li><div className="Link_Item"><Link className="Link" style={{color:'gray'}}>More <ExpandMoreIcon className="more"/> </Link></div></li>
              </ul>
            </div>
            <div className="ProfileFooter_Right">
              <ul className="ProfileButton"> 
                  <li><div><Button className="EditProfile"><EditIcon/>Edit Profile</Button></div></li>
                  <li><div><Button className="AddFriend"><PersonAddIcon/>Add Friend</Button></div></li>
                  <li><div><Button className="Profile_Btn1"><VisibilityIcon/></Button></div></li>
                  <li><div><Button className="Profile_Btn2"><SearchIcon/></Button></div></li>
                  <li><div><Button className="Profile_Btn3"><MoreHorizIcon/></Button></div></li>
                  
              </ul>
            </div>
        </div>
    )
}

export default ProfileFooter
