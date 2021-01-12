import React from 'react'
import './ProfileFooter.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
function ProfileFooter() {
    return (
        <div className="ProfileFooter">
            <div className="ProfileFooter_Left">
              <ul className="ProfileLink">
                  <li><div className="Link_Item"><Link className="Link"  style={{color:'gray'}}>Post</Link></div></li>
                  <li><div className="Link_Item"><Link className="Link" style={{color:'gray'}}>About</Link></div></li>
                  <li><div className="Link_Item"><Link className="Link" style={{color:'gray'}}>Friends</Link></div></li>
                  <li><div className="Link_Item"><Link className="Link" style={{color:'gray'}}>Photos</Link></div></li>
                  <li><div className="Link_Item"><Link className="Link" style={{color:'gray'}}>More <ExpandMoreIcon className="more"/> </Link></div></li>
              </ul>
            </div>
            <div className="ProfileFooter_Right">
              <ul className="ProfileButton"> 
                  <li><div><Button className="Profile_Btn"><EditIcon/>Edit Profile</Button></div></li>
                  <li><div><Button className="Profile_Btn1"><VisibilityIcon/></Button></div></li>
                  <li><div><Button className="Profile_Btn2"><SearchIcon/></Button></div></li>
                  <li><div><Button className="Profile_Btn3"><MoreHorizIcon/></Button></div></li>
                  
              </ul>
            </div>
        </div>
    )
}

export default ProfileFooter
