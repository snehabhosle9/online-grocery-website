import React from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../State/Admin_Auth/Action';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import './signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

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
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
      mobile: data.get('mobile'),
      // photo: data.get('photo'),
      role: data.get('role'),
    };
    dispatch(register(userData));
  };

  return (
    <div className='form-section'>
      <form onSubmit={handleSubmit}>
        <h3>User Signup</h3>
        
        <div className="input-group big">
          <input className='mb' type="text" name="firstName" placeholder='First Name' required />
          <input className='mb' type="text" name="lastName" placeholder='Last Name' required />
        </div>
        
        <div className="input-group big">
          <input className='mb' type="email" name="email" placeholder='Email' required />
          <input className='mb' type="password" name="password" placeholder='Password' required />
        </div>
        
        <div className="input-group big">
          <input className='mb' type="text" name="mobile" placeholder='Mobile Number' />
          <div className="input-group big">
          <select className='mb' name="role" required>
            <option value="CUSTOMER">Customer</option>
            <option value="ADMIN">Admin</option>
          </select>
         </div>
          {/* <input className='mb' type="url" name="photo" placeholder='Profile Photo URL' /> */}
        </div>
        
       

      
        
        <button type='submit' className='login-btn'>Signup</button>
        
        <div className='bottom'>
          Already have an account? <div className='nav-btn' onClick={() => navigate('/login')}>Login</div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
