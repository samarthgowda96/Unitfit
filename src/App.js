import React from 'react';

import './App.css';
import Login from './components/Login'

import Registration from './components/Registration'

import {BrowserRouter as Router ,Route} from 'react-router-dom'

import AppWrapper from './components/AppWrapper'
import {LoginProvider} from './context/LoginContext'
import HeaderHome from './components/HeaderHome';
<<<<<<< HEAD
import Recipe from './components/recipe/Recipe';
=======
import Intensity from './components/workout/Intensity'
import index from './components/caloriecounter/index'

>>>>>>> 48253e3f5e412e1f178d0d3db598f2679db8ed19
function App() {
  return (
    <> 
    <LoginProvider>
   
   
    

    <div className="App">
      
    <Router>
      
    <Route exact path='/login' component={HeaderHome}/>
    
    <Route exact path="/login" component={Login}/>
   
     <Route exact path="/register" component={Registration}/>
     <Route path="/dashboard" component={AppWrapper}/>
<<<<<<< HEAD
     <Route path="/recipe" component={Recipe} />
=======
     <Route path='/Intensity' component={Intensity}/>
     <Route path='/recipes' component={index}/>
     
>>>>>>> 48253e3f5e412e1f178d0d3db598f2679db8ed19
   
    
     
     </Router>


   

 



      
    
     </div>
     </LoginProvider>
    </>
    
  );
}

export default App;
