import React from 'react';

import './App.css';
import Login from './components/Login'

import Registration from './components/Registration'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import AppWrapper from './components/AppWrapper'
import { LoginProvider } from './context/LoginContext'
import HeaderHome from './components/HeaderHome';
//import Recipe from './components/Recipe/Recipe';
import Recipe from './components/recipe/Recipe'
//import CalCounter from './components/Caloriecounter/App';
import Dashboard from './components/Dashboard/Dashboard';
import index from './components/recipe2/src/index'
import Intensity from './components/workout/Intensity'
import MyAccount from './components/MyAccount/MyAccount'
function App() {
  return (
    <>
      <LoginProvider>
        <div className="App">
          <Router>
            <Route exact path='/login' component={HeaderHome} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Registration} />
            <Route exact path="/dashboard" component={AppWrapper} />
            <Route exact path="/recipe" component={Recipe} />
            <Route exact path='/myAccount' component={MyAccount}/>
            <Route exact path="/myDashboard" component={Dashboard} />
            <Route exact path='/intensity' component={Intensity} />
            <Route exact path='/recipe/ourmenu' component={index} />
          </Router>
        </div>
      </LoginProvider>
    </>

  );
}

export default App;
