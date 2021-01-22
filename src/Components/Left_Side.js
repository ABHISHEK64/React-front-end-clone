import React,{useEffect,useState} from 'react';
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospitalOutlined';
import EmojiFlagIcon from '@material-ui/icons/EmojiFlagsOutlined';
import ChatIcon from '@material-ui/icons/ChatBubble';
import StorefrontIcon from '@material-ui/icons/StorefrontOutlined';
import VideoLiberyIcon from '@material-ui/icons/VideoLibraryOutlined';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import PeopleIcon from '@material-ui/icons/PeopleAltOutlined';
import './Left_Side.css';
import { useStateValue } from '../StateProvider';
import {Link,useHistory,useParams} from 'react-router-dom'
import{db} from '../firebase';

const Left_Side=({user})=>{
    
    const history=useHistory();
    if(user==null){
        history.push('/');
      }
      const [profileUserData,setProfileUserData]=useState();
      const{username,uid} =useParams();

    //let currentUser=firebase.auth().currentUser;
       useEffect(()=>{
          db.collection('users').doc(uid).onSnapshot((doc)=>{
              setProfileUserData(doc.data());
          })
       },[]);
       console.log('profile',profileUserData?.photoURL)
       const ExpendMore=()=>{
           document.getElementsByClassName('Sidebar')[0].style.display='block';
           document.getElementsByClassName('Expend')[0].style.display='none';
       }
       const collapse_NOW=()=>{
        document.getElementsByClassName('Sidebar')[0].style.display='none';
        document.getElementsByClassName('Expend')[0].style.display='block';
    }
    return ( <>
        <div className="Sidebar" style={{display:'block'}}> 
           <Link to={`/Profile/${user?.displayName}/${user?.uid}`} style={{textDecoration:'none'}}><SidebarRow src={user?.photoURL} title ={user?.displayName}/></Link> 
           <SidebarRow Icon={LocalHospitalIcon} title="Near Hospital "/>
           <SidebarRow Icon={EmojiFlagIcon} title="Pages "/>
           <SidebarRow Icon={PeopleIcon} title="Friends"/>
          <Link to={`/Messenger`} style={{textDecoration:'none'}}><SidebarRow Icon={ChatIcon} title="Messenger "/></Link> 
           <SidebarRow Icon={StorefrontIcon} title="Market "/>
           <SidebarRow Icon={VideoLiberyIcon} title="Videos "/>
          <div onClick={collapse_NOW}><SidebarRow Icon={ExpandMoreOutlined} title="More " /></div> 

                       
        </div>
        <div onClick={ExpendMore} className="Expend" style={{display:'none'}}><SidebarRow Icon={ExpandMoreOutlined} title="More "/></div>
        </>
    )
}

export default Left_Side
