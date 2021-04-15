import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Navbar from './components/NavBar'
import SignUp from './components/SignUp'
import Header from './components/HeaderHome'
import Registration from './components/Registration'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Data from './components/Data'
import Dashboard from './components/Dashboard';
import AppWrapper from './components/AppWrapper'
import {LoginContext}  from './context/LoginContext'
import HeaderHome from './components/HeaderHome';
import Recipe from './components/';

function App() {
  const [showProfile, setShowProfile]= useState(false)
  return (
    <>
      <LoginContext.Provider value={}>

        <div className="App">

          <Router>

            <Route exact path='/login' component={HeaderHome} />

            <Route exact path="/login" component={Login} />

            <Route exact path="/register" component={Registration} />
            <Route path="/dashboard" component={AppWrapper} />
            



          </Router>

        </div>
      </LoginContext.Provider>
    </>

  );
}

export default App;
