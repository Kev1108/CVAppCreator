
import React, { Component } from 'react'
import CVForm from './components/CVForm';
 
import './App.css'
import PrintComponent from './components/PrintComponent'
import { useSelector } from 'react-redux';

 const App = ()=>{ 
   const filledState = useSelector(state=>state.step.formFilled);
    return (
    <div className='wrapper'>
      <div className='app-description'>
      <h1>CV Generator App.</h1>
      <h6>created by Kevin Estevez</h6>
      <p>Create an download your resume for Free!</p>
      </div>
      
      { filledState === false && <div className='formwrapper'><CVForm/></div> }
      { filledState === true &&  <div className='printwrapper'><PrintComponent /></div> }
    </div>
      
      
    );
  
}

export default App;


