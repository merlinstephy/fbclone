import React from "react";

import { Link } from "react-router-dom";
import "./Register.css";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register()
{
    return(
        <div className="Signup">
       
          <Card style={{ width: '25rem', height : '25rem'}} className='p-2'>
<div className="SignupContainer">
    <div className="Signupdetails">
        <div className="row">
            <div className="col-sm-6 in">
            <input type ="firstname" placeholder="First Name" />  



            </div>
            <div className="col-sm-6 in">
            <input type ="lastname" placeholder="Last Name" /> 
            </div>
        </div>
        
        <input type ="text" placeholder="Email or Phone" /> 
            <input type="text" placeholder="confirm password" />
       

        <input type ="date" id="birtday" placeholder="DOB" />  
        <h4>Gender</h4>
        <input type="radio" placeholder="male" />

        <input type="radio" placeholder="Female" />
    
        <input type="radio" placeholder="Others" />
    

        

       

        <button className="btn">
            <Link to="/LoginPage">Create a Account</Link>
            
        </button>
    </div>
    <div className="">
        <a href="forget">Forgotten Password?</a>  <a href="/Loginpage">Signup</a>
    </div>




          </div>
          </Card>
          </div>
    )
}

export default Register;