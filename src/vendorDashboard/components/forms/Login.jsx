import React from 'react'

const Login = ({ showRegisterHandler }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="loginSection">
       
<form className="authform" onSubmit={handleSubmit}>
     <h3>Vendor Login  </h3>
    <label htmlFor="email">Email</label>    
    <input type="email" id="email" name="email" placeholder="Enter your email" required />

    <label htmlFor="password">Password</label> 
    <input type="password" id="password" name="password" placeholder="Enter your password" required />
 
  <div className="forgotPassword">
    <a href="#">Forgot Password?</a>
  </div>
  <div className="signupLink">
    <span>Don't have an account? </span>
    <button type="button" onClick={showRegisterHandler}>Sign Up</button>
  </div>    
  <div className="btnSubmit">
    <button type="submit">Submit</button>
    </div>
</form> 
    </div>
  )
}

export default Login;
