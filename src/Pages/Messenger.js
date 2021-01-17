import React from 'react'
import './Messenger.css';
import Messenger_Sidebar from '../Messenger_Components/Messenger_Sidebar';
import Chat from '../Messenger_Components/Chat'
import {BrowserRouter as  Router,Route,Switch } from 'react-router-dom';
import db from '../firebase';
function Messenger() {
    return (
        <div className="Messenger">
            <div className="Messenger_body">
             <Router>
             
          
            
        
            <Messenger_Sidebar/>  
            <Route   path="/Messenger/t/:roomId" children={<Chat/>}/>
             
                 
            </Router>   
           
            
            </div>
        </div>
    )
}

export default Messenger
