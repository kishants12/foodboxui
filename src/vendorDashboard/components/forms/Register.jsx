import React from 'react'


const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div  className="registerSection">
     
    <form className="authform" onSubmit={handleSubmit}>
     <h3>Vendor Register </h3>
   

       <label htmlFor="email">UserName</label>    
    <input type="text" id="username" name="userName" placeholder="Enter UserName" required />


    <label htmlFor="email">Email</label>    
    <input type="email" id="email" name="email" placeholder="Enter your email" required />


    <label htmlFor="password">Password</label> 
    <input type="password" id="password" name="password" placeholder="Enter your password" required />
 
  
  <div className="btnSubmit">
    <button type="submit">Submit</button>
    </div>
</form> 
     </div>       
  )
}

export default Register
