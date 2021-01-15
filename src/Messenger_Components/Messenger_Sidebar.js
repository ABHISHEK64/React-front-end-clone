import React, { useEffect,useState } from 'react'
import './Messenger_Sidebar.css'
import {Avatar, IconButton} from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CreateIcon from '@material-ui/icons/Create';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Messenger_SidebarChat from './Messenger_SidebarChat';
import db from '../firebase';
function Messenger_Sidebar() {
    const[rooms,setRooms]=useState([]);
    useEffect(()=>{
          db.collection('rooms').onSnapshot(snapshot=>{
              setRooms(snapshot.docs.map(doc=>({
                  id:doc.id,
                  data:doc.data(),

              })))
          })
    },[])
    const createChat=()=>{

            const roomName=prompt("Please enter chat name")
            if(roomName){
              //do the db stuff
              db.collection('rooms').add({
                  name:roomName,
              })
            } 
    }
    return (
        <div className="Messenger_Sidebar">
         <div className="Messenger_Sidebar__header">
           <Avatar/>
           <h1>Chats</h1>   
           <div className="Messenger_Sidebar__headerRight">
            <IconButton><MoreHorizIcon/></IconButton>
           <IconButton onClick={createChat}><CreateIcon/></IconButton>
           
           </div>

         </div>
         <div className="Messenger_Sidebar__search">
             <SearchOutlinedIcon/>
             <input placeholder="Search Messenger" type="text"/>
         </div>
         <div className="_8Ket"></div>
         <div className="Messenger_Sidebar__chats">
              <Messenger_SidebarChat addNewChat/>
              {
                  rooms.map(room=>(
                    <Messenger_SidebarChat 
                      key={room.id}
                      id={room.id}
                      name={room.data.name}
                    />
                  ))
              } 
              
         </div>
        </div>
    )
}

export default Messenger_Sidebar
