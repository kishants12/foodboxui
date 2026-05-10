import React from 'react'

export const NavBar = ({ showDefaultHandler, showLoginHandler, showRegisterHandler }) => {

  return (
    <div className = "navSection">
        <button type="button" className="brandButton" onClick={showDefaultHandler}>Food Box</button>
        <div className = "company">
            <span onClick={showLoginHandler}>Login</span>
            <span> | </span>            
            <span onClick={showRegisterHandler}>Sign Up</span>
        </div>
            </div>  

  )     
}   
