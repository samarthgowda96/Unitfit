import React from 'react';

import './App.css';
import Login from './components/Login'

import Registration from './components/Registration'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import AppWrapper from './components/AppWrapper'
import { LoginProvider } from './context/LoginContext'
import HeaderHome from './components/HeaderHome';
import Recipe from './components/Recipe/Recipe';
import Recipes from './components/RecipeList';

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
            <Route path="/recipe" from component={Recipe}/>
          </Router>
        </div>
      </LoginProvider>
    </>
  );
}

export default App;
