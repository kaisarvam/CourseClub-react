import React from 'react';
import { NavLink } from 'react-router-dom';


const Login = () => {
    return (
   <div className="mt-5 pt-5 ">
       <h1><strong> <span className="text-warning">Login</span> page </strong></h1>
       <br/>   <br/>
       <div className="container">
           <div>
       <div className="input-group">

  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
<br/>

<div className="input-group">
  
  <input type="text" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
<br/>
<button className=" btn btn-success w-25">LogIn</button>
<br/>
<br/>
<NavLink to="/signup"> Forgot Password </NavLink>
       </div>
     
       </div>
      
   </div>
    );
};

export default Login;