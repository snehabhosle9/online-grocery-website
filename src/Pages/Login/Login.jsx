import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../State/Admin_Auth/Action';
import './login.css'
import { toast } from 'react-toastify'

const Login = () => {
      const [email,setEmail] = useState('');
      const [password,setPassword] = useState('');

      useEffect
         React.useEffect(() => {
            if (auth.error) {
              toast.error(auth.error);
            } else if (auth.jwt) {
              toast.success('Sign up successful!');
              navigate('/');
            }
          }, [auth, navigate]);
        
          const handleSubmit = (e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const userData = {
             /* firstName: data.get('firstName'),
              lastName: data.get('lastName'),*/
              email: data.get('email'),
              password: data.get('password'),
              /*mobile: data.get('mobile'),
              // photo: data.get('photo'),
              role: data.get('role'),*/
            };
            dispatch(login(userData));
          };
      
  
    return (
      <div className='form-section'>
        <form onSubmit={handleSubmit}>
          <h3>Admin Login</h3>
          <div className="input-group">
            <input type="email" name="email" id="email" placeholder=" Admin Email" onChange={(e)=>{}} required/>
          </div>
          <div className="input-group">
            <input type="password" name="password" id="password" placeholder="Admin Password" required />
          </div>
          <button type="submit" className='login-btn'>Login</button>
          <div className="bottom">
            If you already have an account
            <div className='nav-btn' onClick={() => navigate('/signup')}>Signup</div>
          </div>
        </form>
      </div>
    );
  };
  

export default Login