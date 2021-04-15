import React, { useState,useEffect } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link } from 'react-router-dom';
//import UserStore from '../../stores/UserStore'

import './login.css'
import axios from 'axios'

import { LoginContext } from '../context/LoginContext'
import { useContext } from "react";



export default function Login() {

    //const [loginStatus, setLoginStatus] = useContext(LoginContext)
    const [loginStatus,setLoginStatus]=useState(false)
    const [usernameLogin, setUsernameLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [usernameLoginErr, setUsernameLoginErr] = useState({});
    const [passwordLoginErr, setPasswordLoginErr] = useState({});
    const [errors,setErrors]=useState({})
    
    const [input,setInput]=useState({})
    /* const login = () => {
        Axios.post('http://localhost:3009/login', {
            username: usernameLogin,
            password: passwordLogin
        }).then((response) => {
            console.log(response.data[0]);
            if (response.data.message) {
                alert('please enter correct login credentials')
                setLoginStatus(false);

            } else {

                setLoginStatus(true);

            }
        })
    }
 */
/* useEffect( async ()  => {
    try{
        let res = await axios.post('http://localhost:3005/users/IsloggedIn')
        let result = await res.json()
        if(result&& result.success){
            UserStore.loading=false;
            UserStore.isLoggedIn=true
            UserStore.email=result.email
        }
        else{
            UserStore.loading= false 
            UserStore.isLoggedIn=false
        }
    }
    catch(e){
        UserStore.loading=false;
        UserStore.isLoggedIn=false;

    }

},[])
 */
/* const dologout= async() => {
    try{
        let res = await axios.post('http://localhost:3005/users/logout')
        let result = await res.json()
        if(result&& result.success){
            
            UserStore.isLoggedIn=false
            UserStore.email=''
        }
        else{
            UserStore.loading= false 
            UserStore.isLoggedIn=false
        }
    }
    catch(e){
        console.log(e)

    }
}
 */


 const login=() => {
     axios.post('http://localhost:3005/users/login',{
         email: usernameLogin,
         password: passwordLogin
     }).then((response) =>{
         console.log(response.data)
        
         if(response.data==='Invalid creds'){
             const error= response.data;
             setErrors(error)
             alert("Your Email or Password is Invalid")
             setLoginStatus(false)
         }else{
         setLoginStatus(true)
         }

     })
 }
    const onSubmit = (e) => {
        e.preventDefault();
        //const isValid = formValidation();

        if(validate()){
            let input = {input};
            input["email"] = "";
            input["password"] = "";
            setInput(input);
        }
    }
    const validate=()=>{
    
        let errors={};
        let isValid= true;
        
      
          if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your valid email Address.";
          }
      
          if (typeof input["email"] !== "undefined") {
              
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
              isValid = false;
              errors["email"] = "Please enter valid email address.";
            }
          }
          setErrors(errors)

          return isValid

        }
    

    /* const formValidation = () => {
        const usernameLoginErr = {};
        const passwordLoginErr = {};
        let isValid = true;

        if (usernameLogin.trim().length < 8) {
            usernameLoginErr.userNameShort = 'username is too short'
            isValid = 'false'

        }

        if (usernameLogin.includes('@')) {
            usernameLoginErr.userNameEmail = "Username must contain @"
            isValid = false;
            console.log('its working')
        }
        setUsernameLoginErr(usernameLoginErr)
        setPasswordLoginErr(passwordLoginErr)
        return isValid */

    





    return (
        
        <div className = "Login" >
            
            
            <h2 className = 'titlelogin' > Sign In </h2>
            <form onSubmit={onSubmit}> 
            <FormGroup controlId = "email" bsSize = "large" >
            <ControlLabel className = 'names' > </ControlLabel>
            <FormControl
            name = 'Email'
            autoFocus type = "email"
            placeholder = "Email"
            value = { usernameLogin }
            onChange = {(e) => {setUsernameLogin(e.target.value)}}/>
            <div className ="text-danger">{errors.email}</div>
        <FormGroup controlId = "password" bsSize = "large" >
        <ControlLabel className = 'names' > </ControlLabel>
        <FormControl
        type = "password"
        placeholder = 'Password'
        value = { passwordLogin }
        onChange = {(e) => {setPasswordLogin(e.target.value);
    }
}
/>

        
        </FormGroup>
        </FormGroup>
    
        <Link to='/dashboard'>
        <input  onClick = { login } onSubmit = { onSubmit }type="submit"  block bsSize = "large" value="login" class="btn btn-success"/></Link>
        {/* <Button type="submit" block bsSize = "large" >Login</Button> */}
         {/* <Link /* to ='/dashboard'  >
            <Button onClick = { login } onSubmit = { onSubmit } block bsSize = "large" type = "submit"className = 'names' >Login </Button> 
        </Link>  */}
         {/* <Button onClick = { login } onSubmit = { onSubmit } block bsSize = "large" type = "submit"className = 'names' >Login </Button> */} 
       
        </form>

    </div>

    )

}
