import { Avatar } from '@material-ui/core';
import React from 'react'
import './SidebarRow.css';
const SidebarRow=({src,Icon,title})=> {
    return (
        <div className="sidebarRow">
            {src&&<Avatar src={src} className="logo_Profile"/>}
            {Icon&& <Icon/>}
            <p>{title}</p>
        </div>
    )
}

export default SidebarRow
