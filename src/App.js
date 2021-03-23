import React from 'react';

import './App.css';
import Login from './components/Login'

import Registration from './components/Registration'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import AppWrapper from './components/AppWrapper'
import { LoginProvider } from './context/LoginContext'
import HeaderHome from './components/HeaderHome';
import Recipe from './components/recipe/Recipe';
import CalCounter from './components/caloriecounter/App'
import Intensity from './components/workout/Intensity'
import index from './components/recipe2/src/index'


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
            <Route exact path="/recipe" component={Recipe} />
            <Route path='/intensity' component={Intensity} />
            <Route path='/recipe/ourmenu' component={index} />
          </Router>
        </div>
      </LoginProvider>
    </>

  );
}

export default App;
