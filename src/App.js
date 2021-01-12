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
function  App () {
  const [{user},dispatch]=useStateValue();
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
       <Route exact path="/Home">   
       <div className="App">   
      <Header/>
      <div className="App_Body">
       
      <Left_Side/>  
      
      <Feed/>
      <Right_Side/>
      
      </div>
      </div>
      </Route>
      
       <Route exact path="/">
       <Login/>
       </Route>
       <Route exact path="/Profile">
       <Header/>
        <Profile/>
       </Route>
     </Switch>
      
       
       

    </div>
  
)
}

export default App;
