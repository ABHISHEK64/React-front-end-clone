import React from 'react'
import './Profile_Intro.css';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import HouseIcon from '@material-ui/icons/House';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Button} from '@material-ui/core';
function Profile_Intro() {
    return (
        <div className="profile_intro">
         <h1 className="profile_intro_heading">Intro</h1>
         
         <ul className="profile_Option">
             
          <li className="profile_Option1"><CastForEducationIcon className="Icon"/><h4>Study At</h4> <strong>Harcourt Butler Technical University</strong></li>
          <li className="profile_Option1"><HouseIcon className="Icon"/><h4>Lives in</h4> <strong> Kanpur,Uttar Prdesh </strong></li>
          <li className="profile_Option1"><LocationOnIcon className="Icon"/><h4>From</h4> <strong>Kanpur,Uttar Prdesh</strong></li>
          
          <Button className="btn_1">Edit Details</Button>
          <Button className="btn_1">Add Hobbies</Button>
          
          <div className="profile_Feature">
          <img className="img1" src="https://m.media-amazon.com/images/M/MV5BMGMyOThiMGUtYmFmZi00YWM0LWJiM2QtZGMwM2Q2ODE4MzhhXkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_.jpg"/>
          <img className="img2" src="https://m.media-amazon.com/images/M/MV5BNGM5MTEyZDItZWNhOS00NzNkLTgwZTAtNWIzY2IzZmExOWMxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY1200_CR104,0,630,1200_AL_.jpg"/>
        

          <img className="img3" src="https://pbs.twimg.com/profile_images/1192101771184943106/5fGz0JwJ.jpg"/>
          <img className="img4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL2ovQXK8urgEzWiMVL1XQdYPOjGfJ70kDgg&usqp=CAU"/>
          </div>
          <Button className="btn_1">Add Feature</Button>
         </ul>
         
            
        </div>
    )
}

export default Profile_Intro
