import { Avatar, Button, Input } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import { auth,provider,provider1} from '../firebase'
import { useStateValue } from '../StateProvider'
import{actionTypes} from '../Reducer'
import  './Login.css';
import Modal from '@material-ui/core/Modal';
import {makeStyles} from '@material-ui/core/styles'
import {useHistory} from 'react-router-dom';

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
      borderRadius:"6px",
      height:500,
      backgroundColor: theme.palette.background.paper,
      border: '1px solid gray',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(1, 1, 9),
      margin: theme.spacing(1,90,90,90),
      maxWidth:991,
      
      
    },
  }));  
const Login=()=> {
    const history=useHistory()
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
     .then((result)=>{
         console.log(result)
         dispatch({
            type:actionTypes.SET_USER,
            user:result.user
            
        })
        history.push('/Home')

     })  
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
            history.push('/Home')
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
                 console.log("Login Credential !!",authUser)
                 setUser(authUser);
                 if(authUser.displayName){

                 }
                 else{
                     return authUser.updateProfile({
                         displayName:userName,
                         photoURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuKHpTBSTmp7UWmw0C18FrbwD9FFsMgWHnZw&usqp=CAU"
                         
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
            <div className="_4et">
         <div style={modalStyle} className={classes.paper}>
            <div className="_3et">
    
                  <div className="Header"><h1>
                   SignUp
               </h1>
               <p>It's quick and easy.</p></div>
               
            
               <div className="_8icz"></div>  
               <form className="Sign_Up">
                   <div className="SignUP_Name" >
          <input placeholder="User Name"
                 type="text"
                 value={userName}
                 
                 onChange={(e)=>setUsername(e.target.value)}/>
                 </div>
                   <div className="SignUP_Name" >
             
                <input placeholder="Email"
                 type="text"
                 value={email}
                 
                 onChange={(e)=>setEmail(e.target.value)}/>
          </div> 
                   <div className="SignUP_Name" >
          
          <input
              placeholder="password"
              type="password"
              value={password}
              
              onChange={(e)=>setPassword(e.target.value)}/>
        
          </div>
            <div className="para">
            <p>By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy.<br/>You may receive SMS notifications from us and can opt out at any time.</p> 
          </div>
          <div className="btn"> <Button onClick={signUp} className="signup_button">SignUp</Button></div>
            
               </form> 
               </div>           
    </div> 
      </div>
      </Modal>
      
            <div className="Row">
            <div className='login_logo'>
            <img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' className="login_img"/>
            <h2 className="text_title">Facebook helps you connect and share with the people in your life.</h2>
            </div>
            <div className="_8esn">
             <div className="_8iep _8icy _9ahz _9ah-">   
            <div className='login_field'>
            <Button type='submit' onClick={signIn}><img src='https://user-images.githubusercontent.com/1531669/41761219-0e0e4d80-7629-11e8-9663-aabe62025d57.png' className="button-img"/></Button>
                <form>
                <div className="_6lux">    
              <input
              placeholder="email"
              type="text"
              value={email}
              className="LogIN_Name"
              autoFocus="1"
              onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div className="_6lux">    
              <input
              placeholder="Password"
              type="password"
              value={password}
              className="LogIN_Name"
              autoFocus="1"
              onChange={(e)=>setPassword(e.target.value)}/>
              </div>
               <div className="._6ltg">
              <Button type='submit' onClick={handleLogin} className="login_button _6ft _4ft 4_yt" >Log in</Button>
              </div>
              <div className="._52jV" >
                  <a href="https://www.facebook.com/recover/initiate/?ars=facebook_login&privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjA5MzM2MTcyLCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D" className="._52jK">Forgotten password?</a>
              </div>
              <div className="_8icz"></div>
              <div className="_6ltg">
              <Button onClick={()=>setOpen(true)} className="signup_button1" >Create New Account</Button>
              </div>
              </form>
            </div>
            

            </div>
            <div className="._58mk">
                  <a className="_8esh" >Create a Page</a> for a celebrity, band or business.

              </div>
            </div>
            </div>
        </div>
    )
}

export default Login
