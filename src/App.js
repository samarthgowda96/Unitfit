import React from 'react';

import './App.css';
import Login from './components/Login'

import Registration from './components/Registration'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import AppWrapper from './components/AppWrapper'
import { LoginProvider } from './context/LoginContext'
import HeaderHome from './components/HeaderHome';
<<<<<<< HEAD
import Recipe from './components/Recipe/Recipe';
import CalCounter from './components/Caloriecounter/App';
import Dashboard from './components/Dashboard/Dashboard';
=======
import Recipe from './components/recipe/Recipe';
import CalCounter from './components/caloriecounter/App'
import Intensity from './components/workout/Intensity'
import index from './components/recipe2/src/index'


>>>>>>> cf73b0754ddbbb646dfd7424589b14061487892e
function App() {
  return (
    <>
      <LoginProvider>
        <div className="App">
          <Router>
            <Route exact path='/login' component={HeaderHome} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Registration} />
            <Route path="/dashboard" component={AppWrapper} />
<<<<<<< HEAD
            <Route path="/recipe" component={Recipe} />
            <Route path="/myDashboard" component={Dashboard} />
=======
            <Route exact path="/recipe" component={Recipe} />
            <Route path='/intensity' component={Intensity} />
            <Route path='/recipe/ourmenu' component={index} />
>>>>>>> cf73b0754ddbbb646dfd7424589b14061487892e
          </Router>
        </div>
      </LoginProvider>
    </>

  );
}

export default App;
