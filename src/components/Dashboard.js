import React from 'react';
import  { useState } from "react";
import {BrowserRouter as Router} from 'react-dom'
import Axios from 'axios'
import {Button} from 'react-bootstrap'
const users= ''

function Dashboard(){
    const [name, setName]= useState('')
  

const userData = () => {
    Axios.get('http://localhost:9016/dashboard', {
       
       
    }).then((response) => {
        console.log(response.data);
        setName(response)
    })
}

 
  
    return(
        <div>

      
    
        
 
        <Button onClick={userData} >
        getUsers {users.data}
</Button>


            
           
        </div>
    )
}
export default Dashboard;