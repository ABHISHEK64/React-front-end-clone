import { Avatar, Button, Input } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import { auth,provider,provider1} from '../firebase'
import { useStateValue } from '../StateProvider'
import{actionTypes} from '../Reducer'
import  './Login.css';
import Modal from '@material-ui/core/Modal';
import {makeStyles} from '@material-ui/core/styles'

function rand() {
    return Math.round(Math.random() * 20) - 10;
}  
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
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      margin: theme.spacing(30,90,90,90)
      
    },
  }));  
const Login=()=> {
    const [state,dispatch]=useStateValue()
    const [modalStyle]=useState()
    const classes= useStyles(getModalStyle);
    const [open,setOpen]=useState(false);
    const [userName,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const [user,setUser]= useState(null)
    const handleLogin=(event)=>{
     event.preventDefault();
     auth.signInWithEmailAndPassword(email,password)
     
     .catch((error)=>alert(error.message))
    }
    
    const signIn=(e)=>{
        e.preventDefault()
        auth.signInWithPopup(provider1)
        .then(result=>{
            
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            })
        }).catch(error=>alert(error.message))
        //return this.get('store').createRecord('user');
    }
    const signUp=(event)=>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .catch((error)=>alert(error.message));
    }
    useEffect(() => {
       const unSubscribe= auth.onAuthStateChanged((authUser)=>{
            if (authUser)
            {
                 
                 setUser(authUser);
                 if(authUser.displayName){

                 }
                 else{
                     return authUser.updateProfile({
                         displayName:userName,
                
                     });
                 }
            }
            else {
                setUser(null)
            }
        })
        return()=>{
            unSubscribe();
    }
      
    }, [user,userName])
    return (
        <div className='login'>
            <Modal
        open={open}
        onClose={()=>setOpen(false)}
        >
         <div style={modalStyle} className={classes.paper}>
           <center>
               <h1>
                   SignUp
               </h1>
               <p>It's quick and easy.</p>
               </center>  
               <form className="Sign_Up">
                   <div className="SignUP_Name" >
          <input placeholder="User Name"
                 type="text"
                 value={userName}
                 
                 onChange={(e)=>setUsername(e.target.value)}/>
                 </div>
                <div className="SignUP_Emial"> 
                <input placeholder="Email"
                 type="text"
                 value={email}
                 
                 onChange={(e)=>setEmail(e.target.value)}/>
          </div> 
          <div className="SignUP_Password">
          <input
              placeholder="password"
              type="password"
              value={password}
              
              onChange={(e)=>setPassword(e.target.value)}/>
        
          </div>
            <p>By clicking Sign Up, you agree to our <a >Terms</a>, <a >Data Policy</a> and <a >Cookie Policy</a>.<br/>You may receive SMS notifications from us and can opt out at any time.</p> 
          <Button onClick={signUp} className="signup_button">SignUp</Button>   
               </form>            
    </div> 

      </Modal>
     
            <div className='login_logo'>
            <img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg'/>
            </div>
            <div className='login_field'>
            <Button type='submit' onClick={signIn}><img src='https://user-images.githubusercontent.com/1531669/41761219-0e0e4d80-7629-11e8-9663-aabe62025d57.png'/></Button>
                <form>
                    
              <Input
              placeholder="email"
              type="text"
              value={email}
              className="LogIN_Name"
              onChange={(e)=>setEmail(e.target.value)}/>
              <Input
              placeholder="password"
              type="password"
              value={password}
              className="LogIN_Password"
              onChange={(e)=>setPassword(e.target.value)}/>
              <Button type='submit' onClick={handleLogin} className="login_button" >Log in</Button>
              <Button onClick={()=>setOpen(true)} className="signup_button" >Create Account</Button>
              </form>
              
            </div>
            
        </div>
    )
}

export default Login
