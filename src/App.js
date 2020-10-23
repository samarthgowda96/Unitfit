import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/NavBar'
import SignUp from './components/SignUp'

function App() {
  return (
    <>
    <Router>
      <Route path='/signup' component ={SignUp} />
    </Router>

    <div className="App">
      <Login/>
      
     
     </div>
    </>
    
  );
}

export default App;
export * from "react-router"
