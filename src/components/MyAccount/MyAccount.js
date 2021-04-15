import React, {useState,useEffect} from 'react';
import classes from './MyAccount.module.css'
import {Button} from 'semantic-ui-react'
import axios from 'axios'
function MyAccount(){
    const [updatedEmail,setUpdatedEmail]=useState('')
    const [updatedPassword,setUpdatedPassword]=useState('')
    const [updatedRes,setUpdatedRes]=useState(false)
    const [deleteSucess,setDeleteSucess]= useState(false)
    const [updateButton,setUpdateButton]=useState(false)
    const [username,setUserName]= useState('')
    
   
    useEffect(() =>{
        userName()

    },[])
     const userName = () => {
        axios.get('http://localhost:3005/users/6078ba6a67c4da9cc192faaf', {
           
        }).then((response) => {
            console.log(response.data.email);
            const id = response.data.email
            setUserName(id)
            
        })
    } 
   const updateDetails=async()=>{
        await axios.put('http://localhost:3005/users/6078ba6a67c4da9cc192faaf',{
            email:updatedEmail,
            password:updatedPassword
        }).then((response) =>
            console.log(response.data),
            setUpdatedRes(true))
            setUpdatedRes(true)
        
     } 
     /* const  updateDetails= async(data={})=>{
        const res= await fetch('http://localhost:3005/users/6078a5bf63126c8cc56de089',{
        method:'PUT',
        mode:'cors',
        headers: {
      'Content-Type': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  
    body: JSON.stringify(data)
})
console.log(res.data)
     } */
    

    const deleteAccount=()=>{
         axios.delete('http://localhost:3005/users/6078ba6a67c4da9cc192faaf')
        .then((response)=>{
            console.log(response.data)
            //setDeleteSucess(false)
        })
        setDeleteSucess(true)

    }
    return(
        <>
        <h3 style={{color:'white', margin: '20px 30px'}}>My Account</h3>
        <form className={classes.Form} >
            <div>
            <h1>welcome {username}</h1>
        {updatedRes?<h2>Update success</h2>:<h2>Please enter the details</h2>}
        <h2>Email</h2>
        <input 
        placeholder = "email"
        autoFocus type = "email"
        required
        label='email'
        value={updatedEmail}
        name='email'
        style={{width:'20em', height:'2em'}}
        onChange={(e)=>{
           setUpdatedEmail(e.target.value)
         
        }}
        />
       
        <h2>Password</h2>
        <input
        required
        placeholder = "Password"
        autoFocus type = "password"
        label='password'
        value={updatedPassword}
        name='password'
        style={{width:'20em', height:'2em'}}
        onChange={(e)=>{
            setUpdatedPassword(e.target.value)
         }}
        />
        </div>
        <br></br>
        <input  onClick = { updateDetails } type="submit"  block bsSize = "large" value="Update" class="btn btn-success"/>{/* </Link> */}

        <input  onClick = { deleteAccount } type="submit"  block bsSize = "large" value="delete" class="btn btn-danger"/>
        
        {deleteSucess?<h1>Account Succesfully Deleted!!</h1>:<h1></h1>}
        
        </form>
       
        </>
    )
    

}

export default MyAccount;