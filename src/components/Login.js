import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './login.css'


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    
    <div className="Login">
    <h1 className='names'>Welcome to UnitFit :)</h1>
    <h2 className='title'> Sign In</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel className='names'></ControlLabel>
          <FormControl
            autoFocus
            type="email"
            placeholder="Email"
            
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel className='names'></ControlLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder='Password'
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit" className='names'>
          Login
        </Button>
      </form>
    </div>
  );
}