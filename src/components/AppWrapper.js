import React from 'react'
import { Redirect } from 'react-router-dom'
import Dashboard from './Dashboard';
import {Route} from 'react-router-dom'
 import {LoginContext} from '../context/LoginContext'
import { useContext } from 'react';

const AppWrapper = () =>{
  const [loginStatus, setLoginStatus] = useContext(LoginContext)

  //{console.log(loginStatus)}


    if(loginStatus) {
      return( 
      <div>
      <Route path='/dashboard' component={Dashboard} />
      </div>
      )

    
      
   
  }
  else if(loginStatus === false){
    return( <Redirect to="/login" />
      
      )
  }

   return(
    <Redirect to="/login" />
   );
  
}
export default AppWrapper;