import React from 'react'
import Sponsor from './Sponsor'
import './Sponsored.css'
const Sponsored=()=>{
    return (
        <div className="Sponsored">
            <h1>Sponsored</h1>
            <Sponsor SponsorImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMSIRRvvmnnCp5XtT_CusY4ZQywAK9vEwKqg&usqp=CAU"title="Flipkart"link="https://www.flipkart.com/"/>
            <Sponsor SponsorImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi12hiSD5YwTkjBuBvIbVwbDnyGVKayhs3dA&usqp=CAU"title="Amazon"link="https://www.amazon.com/"/>
            <Sponsor SponsorImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF-NTr5TpPASC12luavEsav2BtZGkj8tddw&usqp=CAU" title="G-Shock" link="https://www.gshock.com/"/>
            
            </div>
    )
}

export default Sponsored
