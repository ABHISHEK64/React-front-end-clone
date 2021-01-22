import React ,{Component, useState,useEffect}from 'react';
import './App.css';
import Header from './Components/Header'
import Left_Side from './Components/Left_Side';
import Feed from './Components/Feed'
import Right_Side from './Components/Right_Side';
import Login from './Components/Login';
import Profile from './Pages/Profile';
import{useStateValue} from './StateProvider';
import {Switch,Route} from "react-router-dom";
import { auth } from './firebase';
import Messenger from './Pages/Messenger';
function  App () {
  const [{user},dispatch]=useState([]);
  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
    
      console.log('The User Is Log',authUser)
       if(authUser){
         //the log in
         dispatch({
           type:'SET_USER',
           user:authUser
         })
         
       }
       else{
         //the user logg out
        dispatch({
          type:'SET_USER',
          user:null
        })
       }
    })
  }, [])
  

  return (
    <div className="Main_App">
      <Switch>
       <Route exact path="/Home" >   
       <div className="App">   
      <Header user={user} selected />
       <div className="App_Body">
       <Left_Side user={user}/>  
      
      <Feed user={user}/>
      <Right_Side user={user}/>
       </div>
       
      
      
      
      </div>
      </Route>
      
       <Route exact path="/">
       <Login/>
       </Route>
       <Route  path="/Profile/:usename/:uid" >
       <Header/>
        <Profile user={user}/>
       </Route>
       
       <Route exact path="/Messenger">
       <Header user={user}/>
        <Messenger user={user}/>
       </Route>
     </Switch>
      
       
       

    </div>
  
)
}

export default App;
