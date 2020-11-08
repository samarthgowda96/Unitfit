import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Navbar from './components/NavBar'
import SignUp from './components/SignUp'
import Header from './components/Header'
import Registration from './components/Registration'
import {Link} from 'react-router-dom';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom'
import Data from './components/Data'
import Dashboard from './components/Dashboard';
import AppWrapper from './components/AppWrapper'

function App() {
  return (
    <> 
   
      <Header/>
    

        <div className="App">
    <Router>
    <Switch>
    <Route exact path="/login" component={Login}/>
     <Route exact path="/register" component={Registration}/>
     <Route path="/dashboard" component={AppWrapper}/>
  
     </Switch>
    
     
     </Router>

     <Data/>
   

 



      
     
     </div>
    </>
    
  );
}

export default App;
