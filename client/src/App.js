import React from 'react';
import logo from '../src/assets/logo.png';
import './App.css';

function App() {
  return (
    <div style={{width:'100%',height:80,padding:'20px 10px'}}>
      <img src={logo} style={{width:300 ,height:"100%",display:'block',margin:'auto'}}/>
    </div>
  );
}

export default App;
