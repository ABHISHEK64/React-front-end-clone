import React from 'react';
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospitalOutlined';
import EmojiFlagIcon from '@material-ui/icons/EmojiFlagsOutlined';
import ChatIcon from '@material-ui/icons/ChatBubble';
import StorefrontIcon from '@material-ui/icons/StorefrontOutlined';
import VideoLiberyIcon from '@material-ui/icons/VideoLibraryOutlined';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import PeopleIcon from '@material-ui/icons/PeopleAltOutlined';
import './Left_Side.css';
import { useStateValue } from '../StateProvider';
import {Link} from 'react-router-dom'
const Left_Side=()=>{  
    const [{user},dispatch]=useStateValue()

    return (
        <div className="Sidebar"> 
           <Link to={`/Profile/${user.uid}`} style={{textDecoration:'none'}}><SidebarRow src={user.photoURL} title ={user.displayName}/></Link> 
           <SidebarRow Icon={LocalHospitalIcon} title="Near Hospital "/>
           <SidebarRow Icon={EmojiFlagIcon} title="Pages "/>
           <SidebarRow Icon={PeopleIcon} title="Friends"/>
          <Link to={`/Messenger`} style={{textDecoration:'none'}}><SidebarRow Icon={ChatIcon} title="Messenger "/></Link> 
           <SidebarRow Icon={StorefrontIcon} title="Market "/>
           <SidebarRow Icon={VideoLiberyIcon} title="Videos "/>
           <SidebarRow Icon={ExpandMoreOutlined} title="More "/>

                       
        </div>
    )
}

export default Left_Side
