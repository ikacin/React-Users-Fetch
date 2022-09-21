import React, {useState} from "react";
import './App.css';
import Users from './Users';
import Modal from './Modal';
import './custom.css';
import Popover from './Popover';

function App() {
 const[bgChange,setBgChange] = useState(false);

 const changeDark = () => {

     if(bgChange === false){
         setBgChange(true)
     }else {
         setBgChange(false)
     }
 }


  return (
 <div className={`${bgChange === false ? "dark" : "white"}`}>


     <button onClick={() => changeDark()} className={"react-switch-handle"}>Dark Mode</button>

     <Modal name = { <Users/>}/>


 </div>
  );
}

export default App;
