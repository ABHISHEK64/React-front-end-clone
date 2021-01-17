import { Avatar } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import './Messenger_SidebarChat.css'
import {Link} from 'react-router-dom';
import db from '../firebase';
function Messenger_SidebarChat({id,name,addNewChat}) {
    const[seed,setSeed]=useState('');
    const[messages,setMessage]=useState('');
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000))
    },[]);
    useEffect(()=>{
        if(id){
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>(
              setMessage(snapshot.docs.map((doc)=>doc.data()))
            ))
        }
    },[id])
    const createChat=()=>{
        const roomName=prompt("Please enter chat name")
        if(roomName){
          //do the db stuff
        }
    }
    return !addNewChat ?(
        <Link to={`/Messenger/t/${id}`} className='Messenger_SidebarChat1'>
        <div className='Messenger_SidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg` }/>
            <div className="Messenger_SidebarChat__info">
              <h2>{name}</h2>
              <p>{messages[0]?.message}</p>
            </div>
        </div>
        </Link>
    ):(
        <div onClick={createChat} className="sidebarChat">
           
        </div>
    )
}


export default Messenger_SidebarChat
