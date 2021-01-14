import React from 'react'
import './Messenger.css';
import Messenger_Sidebar from '../Messenger_Components/Messenger_Sidebar';
import Chat from '../Messenger_Components/Chat'
function Messenger() {
    return (
        <div className="Messenger">
            <div className="Messenger_body">
            <Messenger_Sidebar/>
            <Chat/>
            </div>
        </div>
    )
}

export default Messenger
