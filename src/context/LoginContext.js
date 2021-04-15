import React, {useState, createContext} from 'react'


export const LoginContext = createContext({})



export const LoginProvider=(props)=>{
    const [loginStatus, setLoginStatus]= useState(true)
    return(
       

        <LoginContext.Provider value = {[loginStatus, setLoginStatus]}>
            {props.children}
        </LoginContext.Provider>
        
    )
}