import { Avatar, Button, Input } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import { auth,provider,provider1,db} from '../firebase'
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
    const [birthday,setBirthday]=useState([]);
    const[gender,setGender]=useState('');
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
      auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
          if(auth.user){
              auth.user.updateProfile({
                  displayName:userName,
                  photoURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuKHpTBSTmp7UWmw0C18FrbwD9FFsMgWHnZw&usqp=CAU"

              }).then(()=>{
                db.collection('users').doc(auth.user.uid).set({
                    uid:auth.user.uid,
                    displayName:auth.user.displayName,
                    birthday:birthday,
                    photoURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuKHpTBSTmp7UWmw0C18FrbwD9FFsMgWHnZw&usqp=CAU",
                    email:email,
                    bio:""
                  
      
                })
              })
          }
      })
        
        
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
                         
                     })
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
                   <input placeholder="password"
              type="password"
              value={password}
              
              onChange={(e)=>setPassword(e.target.value)}/>
        
          </div>
           <h5 className="register__date">Date Of Birth</h5>
           <div className="row">
            <select className="register__date1" onChange={(e)=>setBirthday([...birthday,e.target.value])}>
                <option value="Day">Day</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>

            </select>
            <select className="register__date2" onChange={(e)=>setBirthday([...birthday,e.target.value])}>
                <option value="Month">Month</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">ApriL</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">Auguest</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
                
            </select>
            <select className="register__date3" onChange={(e)=>setBirthday([...birthday,e.target.value])}>
                <option value="Year">Year</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1999">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
                <option value="1969">1969</option>
                <option value="1968">1968</option>
                <option value="1967">1967</option>
            </select>
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
            <Button type='submit'  onClick={signIn}><img src='https://user-images.githubusercontent.com/1531669/41761219-0e0e4d80-7629-11e8-9663-aabe62025d57.png' className="button-img"/></Button>
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
