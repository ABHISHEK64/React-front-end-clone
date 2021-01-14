import React from 'react'
import './Messenger_Sidebar.css'
import {Avatar, IconButton} from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CreateIcon from '@material-ui/icons/Create';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Messenger_SidebarChat from './Messenger_SidebarChat';
function Messenger_Sidebar() {
    return (
        <div className="Messenger_Sidebar">
         <div className="Messenger_Sidebar__header">
           <Avatar/>
           <h1>Chats</h1>   
           <div className="Messenger_Sidebar__headerRight">
            <IconButton><MoreHorizIcon/></IconButton>
           <IconButton><CreateIcon/></IconButton>
           
           </div>

         </div>
         <div className="Messenger_Sidebar__search">
             <SearchOutlinedIcon/>
             <input placeholder="Search Messenger" type="text"/>
         </div>
         <div className="_8Ket"></div>
         <div className="Messenger_Sidebar__chats">
              <Messenger_SidebarChat/>
              <Messenger_SidebarChat/>
         </div>
        </div>
    )
}

export default Messenger_Sidebar
