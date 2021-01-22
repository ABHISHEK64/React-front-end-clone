import { from } from 'form-data'
import React,{useState,useEffect} from 'react'
import './Friends.css';
import {db} from '../firebase';

import {useStateValue} from '../StateProvider';
import{Avatar} from '@material-ui/core';
import{Link} from 'react-router-dom';
import firebase from 'firebase';
function Friends() {
    const [users,setUser]=useState([]);
    const[{user},dispatch]=useStateValue();
    let currentUser=firebase.auth().currentUser;
    useEffect(()=>{
        db.collection('users').onSnapshot(snapshot=>{
            setUser(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        })
    },[])
    return (
        <div className="Friends">
            <h1>Friends</h1>
           {console.log('usser_id',users.id)}
             
            { users.map(user1=>(
                user1.displayName!==currentUser?(
                <Link to={`/Profile/${user1.data.displayName}/${user1.id}`}>
                <div className="Friends_Body">
                <Link to={`/Profile/${user1.id}`}><Avatar src={user1.data.photoURL}/></Link> 
                 <h3>{user1.data.displayName}</h3>
                 {console.log('usser_id',user1.uid)}             
              </div>
              </Link>
                ):(
                    console.log('user are same')
                )
                
            ))
           }
        
           
        </div>
    )
}

export default Friends
