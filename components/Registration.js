import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Form,Button,Segment,Header,Divider} from 'semantic-ui-react'
import{Input} from 'semantic-ui-react-form-validator'
import axios from 'axios';
import './login.css'
import { Grid } from 'react-bootstrap';


function Registration() {
  
   

    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [error, setError]=useState(false)

    

    const register = async(e) => {
        e.preventDefault();
        try {
            const res= await axios.post('http://localhost:5000/register', {
                email:email,
                password:password
            });
            console.log(res.data)
            
        } catch (error) {
            console.log(error)
        }
       
    }
    

      
  return(
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={register}>
        
        <label>Email</label>
        <input 
          className="registerInput" 
          type="text" 
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
          
          />
        <label>Passwordsssss</label>
        <input 
          className="registerInput" 
          type="password" 
          placeholder="Enter your password..." 
          onChange={(e)=>setPassword(e.target.value)}
          
          />
        <button className="registerButton" type='submit'>Register</button>
      </form>
      <Link to="/login">
        <button className="registerLoginButton">Login</button>
        </Link>
        {error && <span style={{color:"red", marginTop:"12px"}}>Something went wrong Bois!!</span>}
      
    </div>
)

      
}
export default Registration;