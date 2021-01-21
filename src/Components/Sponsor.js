import React from 'react'
import { Link } from 'react-router-dom'
import './Sponsor.css'
const Sponsor=({SponsorImg,title,link})=> {
    return (
        <div className="sponser">
            <div className="Sponser_Left">
              <div className="Sponer_img">
                <img src={SponsorImg}/>
              </div>
            </div>
            <div className="Sponser_title">
                <h2>{title}</h2>
            </div>
            <div className="Sponser_link">
                <a href={link} style={{color:'black'}}>{link}</a>
            </div>
        </div>
    )
}

export default Sponsor
