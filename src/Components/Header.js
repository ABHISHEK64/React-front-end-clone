import React,{Component,useState,useEffect}from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import FlagICON from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import { Avatar, Button, Collapse, IconButton } from '@material-ui/core';
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
import Modal1 from '@material-ui/core/Modal';

import {makeStyles} from '@material-ui/core/styles'
import {Link,useHistory} from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import{db} from '../firebase';
function getModalStyle() {
    const top = 50
    const left = 50
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'fixed',
      width: 900,
      borderRadius:"6px",
      height:900,
      background:'blue' ,
      border: '1px solid gray',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(1, 1, 9),
      margin: theme.spacing(0,0,20,21),
      maxWidth:991,
      
      
    },
  }));  

const Header= ({selected}) => {
    const[{user},dispatch]=useStateValue();
    const history=useHistory();
    if(user==null){
      history.push('/');
    }
    const [open,setOpen]=useState(false);
    const[users,setUsers]=useState([]);
    const [open1,setOpen1]=useState(false);
    const[search,setSerchTerm]=useState('');
    const[filteredUser,setFilterTerm]=useState([]);
    const classes= useStyles(getModalStyle);
    const HandlSignOut=()=>{
      auth.signOut();
      <Login/>
    }
    
    const collapseNavbr=()=>{
      document.getElementsByClassName("header_Logo")[0].style.display='flex';
      document.getElementsByClassName("header_search")[0].style.display='none';
      
    
      
    }
    const expendNavbar=()=>{
      document.getElementsByClassName("header_Logo")[0].style.display='none';
      document.getElementsByClassName("header_search")[0].style.display='flex';
    
    }
    useEffect(()=>{
      db.collection('users').onSnapshot(snapshot=>{
         setUsers(snapshot.docs.map((doc)=>({id:doc.id,data:doc.data()})))
      })
      if(users!==undefined){
        console.log("users:",users)
        const finalUsers=users.filter(user=>{
          return user.data.displayName.toLowerCase().indexOf(search.toLowerCase())!==-1;
        })
        console.log("desire:",finalUsers);
        setFilterTerm(finalUsers)
      }
    },[search])

    const updateSearchResults=(e)=>{
      setSerchTerm(e.target.value);
      document.getElementsByClassName("header_search")[0].style.display='flex';
    }
    return (
        <div className="header">
             <Modal1 open1={open1} className={classes}>
             
             <div className="dropDown">
             {console.log("i am modal")}
             <h1>hello</h1>
                  <ul id="list">
                    {user!==undefined &&(
                      filteredUser.map((user1)=>{
                        <li className="id">
                          <Link onClick={collapseNavbr} to={`/profile/${user1.id}`}>
                            <Avatar src={user1.data.photoURL}/>
                            <h3 style={{textTransform:'capitalize'}}>{user1.data.displayName}</h3>
                          </Link>
                        </li>
                      })
                    )}
                  </ul>

                </div>
             </Modal1>
             
            { 
               user?(
               <>
            <div className="header_left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="facebook_logo" className="header_Logo"/>
                <ExitToAppIcon className="header_search"  onClick={collapseNavbr}/>
                <div className="dropDown">
                    {user!=undefined &&(
                      filteredUser.map((user1)=>{
                        {console.log(filteredUser)}
                        <div className="dropDown">
                              <h1>hello</h1>
                            <ul id="list">
                        <li className="id">
                          <Link onClick={collapseNavbr} to={`/profile/${user1.id}`}>
                            <Avatar src={user1.data.photoURL}/>
                            <h3 style={{textTransform:'capitalize'}}>{user1.data.displayName}</h3>
                          </Link>
                        </li>
                        </ul>

                        </div>
                      })
                    )}
                    </div>
                  
            </div>
           
          
                

        
            <div className="header_input"  onClick={()=>setOpen1(true)}>
            <SearchIcon className="header_searchTerm" onClick={expendNavbar}/>
           <input className="searchbox"placeholder="Search Facebook" type="text" onChange={updateSearchResults} />
          </div>
          
        
            <div className="header__center">
                
                
                  <div className="header__option ">
                <Link to="/Home"style={{color:`black !important`},{textDecoration:`none`}} className={`header__option ${ selected&&'header__option--Active'}` }>
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
              <Link to={`/Profile/${user.uid}`} style={{color:`black`},{textDecoration:`none`}}>
              <div className='header__info  header__Active'>
                  <Avatar src={user.photoURL} />
                  <h4>{user.displayName}</h4>
                 
              </div>
              </Link>
              <Modal open={open}
        onClose={()=>setOpen(false)} className="mix">
               <div className="_8Met">
                   <Link to={`/Profile/${user.uid}`} style={{color:`black`},{textDecoration:`none`}}>
                   <div className="_8Ret"><Avatar src={user.photoURL} className="Profile_img" />
                   <h1>{user.displayName}</h1>
                   
                   </div>
                   </Link>
                   
                   <div className="para" >
                   <h4><Link to={`/Profile/${user.uid}`} style={{color:`black`}}>See your profile</Link></h4>
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
              <Link to='/Messenger'>
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
