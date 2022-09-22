import React, {useState} from "react";
import './App.css';
import Users from './Users';
import Modal from './Modal';
import './custom.css';
import Popover from './Popover';
import Switch from  './Switch';
import Icons from './Icons';

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

     <Switch mode={() => changeDark()} theme = {() => modeChange()} selectIcon = {<Icons/>}/>


     <Modal name = { <Users/>}/>


 </div>
  );
}

export default App;
