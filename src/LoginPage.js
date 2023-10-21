import React from 'react';
import './LoginPage.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



function LoginPage(){
    return( 
        <div className="Login">
        <div className="facebook">
        <div className="facebooktext">  
        facebook
        </div>
          <div className="title">
          Facebook helps you connect and share 
          <br></br>with the people in your life.
          </div>
          </div>      
          <Card style={{ width: '25rem', height : '23rem'}} className='p-2'>
      
    
      <form className='col-sm-6  px-4 '>
                <div className='form mb-3 p-1 ' style={{ width : '300px'} }>
                    <input type="email" className="form-control fm" placeholder='Email address or phone number'  />

                </div>
                <div className=' mb-3 ' style={{ width : '300px'} }>
                    <input type="password" className='form-control' placeholder='password' />
                    
                </div>
                <div className='text-center'>
                    <button type='submit' className='login-btn py-2 rounded-3'  > <Link to="/Home" style = {{color: 'white'}}>Log in</Link></button>
                  <br></br>  <center>
         <a href="" >Forgotten password?</a></center>
         
                    <hr style={{ width : '300px'} }></hr>
                   
                </div>
                <button type='submit' className='login-btn py-2 rounded-3  ' style = {{backgroundColor : '#42B72A'}} > <Link to="/Register" style = {{color: 'white'}}>Create an account</Link></button>

            </form>
            <br>
            </br>
            <br></br><br></br>
            <div className='Page pt' >
        <pre><b><a href ="" style ={{color : 'black' }}>Create a Page</a></b> for a celebrity,brand or business.</pre></div>
    </Card>
    
       
   
        
   </div>
      
      
    )
}
export default LoginPage;