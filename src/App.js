import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/NavBar'
import SignUp from './components/SignUp'
import Header from './components/Header'
import Registration from './components/Registration'

function App() {
  return (
    <>

    <Header/>

    <div className="App">
      <Login/>
      <Registration/>
      
     
     </div>
    </>
    
  );
}

export default App;
export * from "react-router"
