import React from 'react';
import './Right_Side.css';
import Sponsored from './Sponsored';
import Friends from './Friends';
const Right_Side=()=>{
    return (
        <div className='Right_Side'>
            <Sponsored/>
            <div className="line"></div>
            <Friends/> 
        </div>
    )
}

export default Right_Side
