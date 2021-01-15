import React from 'react'
import './Messenger.css';
import Messenger_Sidebar from '../Messenger_Components/Messenger_Sidebar';
import Chat from '../Messenger_Components/Chat'
import { Route,Router,Switch } from 'react-router-dom';
import db from '../firebase';
function Messenger() {
    return (
        <div className="Messenger">
            <div className="Messenger_body">
            
            <Switch>
            <Messenger_Sidebar/>   
            <Route  path="/Messengger/:roomId">
            <Chat />
            </Route>
            <Route  path="/Messengger">
            <Chat />
            </Route>
            
            </Switch>
            
            </div>
        </div>
    )
}

export default Messenger
