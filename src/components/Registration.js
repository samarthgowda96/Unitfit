import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Form,Button,Segment,Header} from 'semantic-ui-react'

import axios from 'axios';
import './login.css'



function Registration() {
  
   

    
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [error, setError]=useState(false)

    

    const register = async(e) => {
        e.preventDefault();
        setError(false)
        try {
            const res= await axios.post('http://localhost:5000/register', {
                email:email,
                password:password
            });
            res.data&& window.location.replace('/login')
            setError(true)
            
        } catch (error) {
            console.log(error)
            setError(true)
        }
       
    }
    
    

      
  return(
      <>
    <Form>
        
        <Segment inverted tertiary>
    <Header as='h2'>Create Account</Header></Segment>
    
    <div className='ui inverted divider column centered grid'>
    <Segment inverted tertiary>
    <div className='six wide column'>
    <Form.Input
    
      className='Size'
      error={{ content: 'Please enter your email address', pointing: 'below' }}
      fluid
      label='Email'
      type='email'
      placeholder='Email'
      id='form-input-email'
      validators={['required']}
      errorMessages={['this field is required']}
      onChange={(e)=>{
        setEmail(e.target.value);
    }}
    />
    
    <Form.Input 
      error='Please enter your password'
      fluid
      label='Password'
      placeholder='Password'
      id='form-input-password'
      type='password'
      onChange={(e)=>{
        setPassword(e.target.value);
    }}
    />
   
    <Link to='/login'> 
    <Button type='submit' onClick={register}>Submit</Button>
    </Link> 

    </div>
    </Segment>

    </div>
    
    
   
    

    
    
  </Form>
  </>
)

       /* <div className="card col-12 col-lg-12 logins-card mt-1hv-center" className='card'>
    
            <form>
                <div className="form-group text-left">
                <label >Email address</label>
                <input type="email" 
                       className="form-control" 
                       
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                       onChange={(e)=>{
                           setUsernameRegistration(e.target.value);
                       }}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                       
                        id="password" 
                        placeholder="Password"
                        onChange={(e)=>{
                            setPasswordRegistration(e.target.value);
                        }}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                      
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                        //onChange={handleChange}
                    />
                </div>
                <Link to='/dashboard'>
                <button 
                    type="submit" 
                  
                    class="btn btn-default"
                    
                    onClick={register}>
                    
                    Register
                </button>
                </Link>
            </form>
            <Link to="/register" >
    
            <button  inline-block bsSize="large"  type='submit' className='names' >
        <p>forgot Password?</p>
     </button>
     </Link>
        </div>
   
    )
}*/
}
export default Registration;