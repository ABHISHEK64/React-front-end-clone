import React,{Component,useState}from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import FlagICON from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import { Avatar, Button, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/ForumOutlined';
import NotificatonsActiveIcon from '@material-ui/icons/NotificationImportantOutlined';
import ExpendMoreIcon from '@material-ui/icons/ExpandMoreOutlined';
import FeedbackIcon from '@material-ui/icons/Feedback';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { auth,provider,provider1} from '../firebase';
import Login from '../Components/Login';
import './Header.css';
import {useStateValue} from '../StateProvider';
import Modal from '@material-ui/core/Modal';
import {makeStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom';
function getModalStyle() {
    const top = 90
    const left = 10
  
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
      borderRadius:"6px",
      height:500,
      background:'none' ,
      border: '1px solid gray',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(1, 1, 9),
      margin: theme.spacing(1,110,200,210),
      maxWidth:991,
      
      
    },
  }));  

const Header= () => {
    const[{user},dispatch]=useStateValue();
    const [open,setOpen]=useState(false);
    const classes= useStyles(getModalStyle);
    const HandlSignOut=()=>{
      auth.signOut();
      <Login/>
    }
    return (
        <div className="header">
             
             
            { 
               user?(
               <>
            <div className="header_left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="facebook_logo"/>

            </div>
            <div className="header_input">
                <SearchIcon/>
                <input placeholder="Search Facebook" type="text"/>

            </div>
            <div className="header__center">
                
                
                  <div className="header__option ">
                <Link to="/Home"style={{color:`black !important`},{textDecoration:`none`}} className="header__option header__option--Active" >
                    <HomeTwoToneIcon fontsize='large'/>
                  </Link>
                </div>
                
                
                <div className="header__option">
                    <FlagICON fontsize='large'/>

                </div>
                
                
                <div className="header__option ">
                    <SubscriptionsOutlinedIcon fontsize='large'/>

                </div>
              
                
                <div className="header__option ">
                    <StorefontOutlinedIcon fontsize='large'/>

                </div>
                
                                
                  <div className="header__option ">
                    <SupervisedUserCircleIcon fontsize='large'/>

                </div>
                
            </div>
            <div className='header__right'>
              <Link to="/Profile" style={{color:`black`},{textDecoration:`none`}}>
              <div className='header__info  header__Active'>
                  <Avatar src={user.photoURL} />
                  <h4>{user.displayName}</h4>
                 
              </div>
              </Link>
              <Modal open={open}
        onClose={()=>setOpen(false)} className="mix">
               <div className="_8Met">
                   <Link to="/Profile" style={{color:`black`},{textDecoration:`none`}}>
                   <div className="_8Ret"><Avatar src={user.photoURL} className="Profile_img" />
                   <h1>{user.displayName}</h1>
                   
                   </div>
                   </Link>
                   
                   <div className="para" >
                   <h4><Link to="/Profile" style={{color:`black`}}>See your profile</Link></h4>
                   </div>
                  <div className="_8Ket"></div>
                  <div className="_8Jet">
                  <div className="_8Let"><FeedbackIcon/></div>    
                  
                  <h3>Give feedback</h3>
                     
                </div> 
                <div className="para1">
                   <h4><a>Help us improve the new Facebook</a></h4>
                   </div>
                   <div className="_8Ket"></div>
                <div className="_8Bet">
                    <ul>
                        <li className="_BTet"><div className="_8Cet"><SettingsIcon/></div><h3>Settings & privacy</h3></li>
                        <li className="_BTet"> <div className="_8Cet"><HelpIcon/></div><h3>Help & support</h3></li>
                        <li className="_BTet"> <div className="_8Cet"><Brightness2Icon/></div> <h3>Display preferences</h3></li>
                        <Link to="/"className="_BTet"><li className="_BTet" onClick={HandlSignOut}> <div className="_8Cet"><MeetingRoomIcon /></div><h3>Log Out</h3></li></Link>
                
                        
                    </ul>
                    
                    </div>   
   
               </div>
              </Modal>
              <IconButton>
              <AddIcon/>
              </IconButton>
              <Link to='/Messengger'>
              <IconButton>
              <ForumIcon/>
              </IconButton>
              </Link>
              <IconButton>
              <NotificatonsActiveIcon/>
              </IconButton>
              <IconButton>
                  
              < ExpendMoreIcon className="Expend_active" onClick={()=>setOpen(true)}/>

              </IconButton>
              
            
              
            </div>
              </>
              ):(
                  <Login/>
              )
              }
        </div>
    )
    }

export default Header
