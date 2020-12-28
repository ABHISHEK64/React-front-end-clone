import React ,{useState}from 'react';
import './App.css';
import Header from './Components/Header'
import Left_Side from './Components/Left_Side';
import Feed from './Components/Feed'
import Right_Side from './Components/Right_Side';
import Login from './Components/Login';
import{useStateValue} from './StateProvider'
function App() {
  const [{user},dispatch]=useStateValue();
  
  return (
    <div className="App">
     { 
        user ?(
          <>
      <Header/>
      <div classname="App__Body">

      <Left_Side/>
      <Feed/>
      <Right_Side/>
      </div>
      </>
    
       ):(
        <Login/>
       )
}
    </div>
  
)}

export default App;
