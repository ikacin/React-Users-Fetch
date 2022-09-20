import React from "react";
import './App.css';
import Users from './Users';
import Modal from './Modal';
import './custom.css';

function App() {
  return (
    <div className="App">


     <Modal name = { <Users/>}/>
    </div>
  );
}

export default App;
