import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link, Redirect, Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import './login.css'
import Axios from 'axios'

import { LoginContext } from '../context/LoginContext'
import { useContext } from "react";



export default function Login() {

    const [loginStatus, setLoginStatus] = useContext(LoginContext)
    const [usernameLogin, setUsernameLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [usernameLoginErr, setUsernameLoginErr] = useState({});
    const [passwordLoginErr, setPasswordLoginErr] = useState({});
    const login = () => {
        Axios.post('http://localhost:9016/login', {
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

    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = formValidation();
    }

    const formValidation = () => {
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
        return isValid

    }





    return (

        <
        div className = "Login" >

        <
        h2 className = 'titlelogin' > Sign In < /h2>


        <
        form >

        <
        FormGroup controlId = "email"
        bsSize = "large" >
        <
        ControlLabel className = 'names' > < /ControlLabel>

        <
        FormControl name = 'Email'
        autoFocus type = "email"
        placeholder = "Email"
        value = { usernameLogin }

        {...Object.keys(usernameLoginErr).map((key) => {
                return <div style = {
                    { color: 'red ' } } > { usernameLoginErr[key] } < /div>
            })
        }

        onChange = {
            (e) => {
                setUsernameLogin(e.target.value);

            }
        }

        //onChange={e => setEmail(e.target.value)}
        /> <
        /FormGroup> <
        FormGroup controlId = "password"
        bsSize = "large" >
        <
        ControlLabel className = 'names' > < /ControlLabel> <
        FormControl


        onChange = {
            (e) => {
                setPasswordLogin(e.target.value);
            }
        }

        {...Object.keys(passwordLoginErr).map((key) => {
                return <div style = {
                    { color: 'red ' } } > { passwordLoginErr[key] } < /div>
            })
        }


        type = "password"
        placeholder = 'Password'
        value = { passwordLogin }

        />

        <
        /FormGroup>

        <
        Link to = '/dashboard' >
        <
        Button onClick = { login }
        onSubmit = { onSubmit }
        block bsSize = "large"
        type = "submit"
        className = 'names' >
        Login <
        /Button> <
        /Link>




        <
        /form>

        { /*<AppWrapper status = {loginStatus}/>*/ }





        <
        /div>
    );
}