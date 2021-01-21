import React,{useState,useEffect} from 'react'
import  './Cover.css'
import {Avatar, Button} from '@material-ui/core';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import {useStateValue} from '../StateProvider';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import firebase from 'firebase';
import {useParams} from 'react-router-dom';
import {db} from '../firebase';
import { from } from 'form-data';
function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
function Cover({photoURL,coverImg}) {
    const[{user},dispatch]=useStateValue();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const[imageURL,setImageURL]=useState('');
    const[coverURL,setCoverURL]=useState('');
    const{username,uid} =useParams();
    //uploda Profile Pic And Cover Pic of Current User
    const [profileUserData,setProfileUserData]=useState();
    let currentUser=firebase.auth().currentUser;
    useEffect(()=>{
      db.collection('users').doc(uid).onSnapshot((doc)=>{
          setProfileUserData(doc.data());
      })
   },[]);  
    if(profileUserData!==undefined){
      if(profileUserData?.displayName!==user?.displayName){
        document.getElementsByClassName('Camera_icon')[0].style.display='none';
        document.getElementsByClassName('Camera_cover')[0].style.display='none';
      }
      else{
        console.log('user same');
      }
    }
   const handleUplode=async(e)=>{
     e.preventDefault();
     console.log('profilePicUpload Sucessfully');
     db.collection('users').doc(uid).update({
       photoURL:imageURL,
      
     })
     setImageURL('')
     
   }
   const handleUplode1=async(e)=>{
    e.preventDefault();
    console.log('profilePicUpload Sucessfully');
    db.collection('users').doc(uid).update({
          coverURL:coverURL
    })
  
    setCoverURL('')
  }
    return (
        <>
    <  Modal
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
          <div className="Profile_pic">
               <h1> This for Profile pic</h1>
               <p style={{margin:'auto'}}>Enter The Image Url To Upload Profile Picture</p>
               <from className='AddProfile'>
                 <input type='text' className='AddProfileInput' value={imageURL} placeholder='Add profile Pic' onChange={(e)=>setImageURL(e.target.value)}/>
                 <Button type='submit' className='AddButton' onClick={(e)=>{handleUplode(e)}}>Submit</Button>
               </from>
          </div>
      </Modal>
      <  Modal
        open={open1}
        onClose={()=>setOpen1(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
          <div className="Cover_picture">
               <h1> This for Cover pic</h1>
               <p style={{margin:'auto'}}>Enter The Image Url To Upload Cover Picture</p>
               <from className='AddProfile'>
                 <input type='text' className='AddCoverInput' value={coverURL} placeholder='Add profile Pic' onChange={(e)=>setCoverURL(e.target.value)}/>
                 <Button type='submit' className='AddButton1' onClick={(e)=>{handleUplode1(e)}}>Submit</Button>
               </from>
          </div>
      </Modal>
        <div className="Cover_Pic">
            <img className="Cover_IMG" src={!coverURL?("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAw8OUZUdfVRk1UvOKYl2kj2GmzDWaoiblLw&usqp=CAU"):({coverURL})}/>
        </div>
        <div className="User">
      <Avatar src={photoURL} className="user_profile"/>
        <Button className="Camera_icon" onClick={()=>setOpen(true)}><CameraAltIcon className="Camera"/></Button>
        <Button className="Camera_cover" onClick={()=>setOpen1(true)}><CameraAltIcon className="Camera2"/> <h6>Edit Cover Photo</h6></Button>
        </div>
        
        </>
    )
}

export default Cover
