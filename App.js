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
import { LoginProvider } from './context/LoginContext'
import HeaderHome from './components/HeaderHome';
<<<<<<< HEAD
import Recipe from './components/'
=======
import index from './components/caloriecounter/index'

>>>>>>> 48253e3f5e412e1f178d0d3db598f2679db8ed19
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
            



          </Router>

        </div>
      </LoginProvider>
    </>

  );
}

export default App;
