import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HOMEICON from '@material-ui/icons/Home';
import FlagICON from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/ForumOutlined';
import NotificatonsActiveIcon from '@material-ui/icons/NotificationImportantOutlined';
import ExpendMoreIcon from '@material-ui/icons/ExpandMoreOutlined';
import './Header.css';
import {useStateValue} from '../StateProvider';
const Header= () => {
    const[{user},dispatch]=useStateValue()
    return (
        <div className="header">
            <div className="header_left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="facebook_logo"/>

            </div>
            <div className="header_input">
                <SearchIcon/>
                <input placeholder="Search facebook" type="text"/>

            </div>
            <div className="header__center">
                <div className="header__option header__option--Active">
                    <HOMEICON fontsize='large'/>

                </div>
                <div className="header__option">
                    <FlagICON fontsize='large'/>

                </div>
                <div className="header__option ">
                    <SubscriptionsOutlinedIcon fontsize='large'/>

                </div>
                <div className="header__option ">
                    <StorefontOutlinedIcon fontsize='large'/>

                </div>
                <div className="header__option ">
                    <SupervisedUserCircleIcon fontsize='large'/>

                </div>

            </div>
            <div className='header__right'>
              <div className='header__info'>
                  <Avatar src={user.photoURL} />
                  <h4>{user.displayName}</h4>

              </div>
              <IconButton>
              <AddIcon/>
              </IconButton>
              <IconButton>
              <ForumIcon/>
              </IconButton>
              <IconButton>
              <NotificatonsActiveIcon/>
              </IconButton>
              <IconButton>
              <ExpendMoreIcon/>
              </IconButton>
            </div>
        </div>
    )
}

export default Header
