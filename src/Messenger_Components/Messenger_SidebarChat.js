import { Avatar } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import './Messenger_SidebarChat.css'
function Messenger_SidebarChat({addNewChat}) {
    const[seed,setSeed]=useState('');
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000))
    },[]);
    const createChat=()=>{
        const roomName=prompt("Please enter chat name")
        if(roomName){
          //do the db stuff
        }
    }
    return !addNewChat ?(
        <div className='Messenger_SidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg` }/>
            <div className="Messenger_SidebarChat__info">
              <h2>Room name</h2>
              <p>Last Message...</p>
            </div>
        </div>
    ):(
        <div onClick={createChat} className="sidebarChat">

        </div>
    )
}


export default Messenger_SidebarChat
