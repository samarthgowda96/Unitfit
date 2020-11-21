import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Form,Button,Segment,Header,Divider} from 'semantic-ui-react'
import{Input} from 'semantic-ui-react-form-validator'
import Axios from 'axios';
import './login.css'
import { Grid } from 'react-bootstrap';


function Registration() {
  
    /*const [loggedIn, setLoggedIn] = React.useState(false);
    const [loginForm , setLoginForm] = useState({
        registeredEmail : "",
        registeredPassword : ""
    })
    const [signUpForm, setSignUpForm] = React.useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phone: '',
        location: '',
        type: 'onlineUser', // OnlineUser set as default, because this is what is displayed initially in the type dropdown
      })
    const handleChange = (e) => {
       if(e.target.name ==='registeredEmail'|| e.target.name==='registeredPassword'){
           const updates = {...loginForm};
           updates[e.target.name]= e.target.value;
           setLoginForm({...updates})

       }else {
           const updates ={...signUpForm}
           updates[e.target.name]= e.target.value;
           setSignUpForm({...updates})
       }
        }

    const handleSignup = async (e)=>{
        e.preventDefault()
        const data ={...signUpForm}
        data.isSponsoredUser  = data.type ==="Sponsored User"

        let allFilled = true;
        for (let field in data) {
         if (!data[field] && field !== 'isSponsoredUser') {
            allFilled =false;
      }
    }
      if(!allFilled){
          //window.alert("You Should complete all the fields")
      }else {
          const response = await Ajax.createUser(data)

      
      if(response.Error){
          window.alert("email already registered")
      }else{
          const loginResponse = await Ajax.userLogin(data);
          localStorage.setItem('Unifit_token', loginResponse.token)
          setLoggedIn(true)
      }
    }
}
    
      React.useEffect(() => {
        if (localStorage.getItem('unitfit_token')) {
          setLoggedIn(true);
        }
      }, [])
    
      if (loggedIn) {
        return (
          <Redirect to='/' />
        )
      }
    
    /*const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
             
        } else {
            props.showError('Passwords do not match');
        }
    }*/

    const [usernameRegistration, setUsernameRegistration]= useState('');
    const [passwordRegistration, setPasswordRegistration]= useState('');
    

    const register = () => {
        Axios.post('http://localhost:9001/register', {
            username: usernameRegistration,
            password: passwordRegistration
        }).then((response) => {
            console.log(response);
        })
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
        setUsernameRegistration(e.target.value);
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
        setPasswordRegistration(e.target.value);
    }}
    />
   
    <Link to='/DashBoard'>
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