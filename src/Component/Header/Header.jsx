import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { getUser, logout } from '../../State/Admin_Auth/Action'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
const Header = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null)
  const openUserMenu = Boolean(anchorEl);
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector(state => state.auth);

  const handleUserClick = (e) => {
      setAnchorEl(e.currentTarget);
  }


  useEffect(() => {
      if (jwt) {
          dispatch(getUser(jwt));

      }

  }, [jwt, auth.jwt]);

  const handleLogout = () => {
      dispatch(logout());
      handleCloseUserMenu();
  }
  const handleCloseUserMenu = (e) => {
      setAnchorEl(null)
  }


  return (
    
<div class="header">
    <div className="logo">
      <Link><i class="fas fa-shopping-basket"></i>Grocery</Link>
    </div>
    <nav class="navbar">
        <Link to='/'>Home</Link>
        <Link to='/features'>Features</Link>
        <Link to='/products'>Products</Link>
        <Link to='/category'>Categories</Link>
        <Link to='./Review'>Review</Link>
        <Link to='./Blogs'>Blogs</Link>
    </nav>

    <div class="icons">
        <Link to='/search' class="fas fa-search" id="search-btn"></Link>
        <Link to='/cartt' class="fas fa-shopping-cart" id="cart-btn"></Link>
         <Link to='/login' class="" id="login-btn">login</Link> 
         <Link to='/signup' class="" id="login-btn">signup</Link> 

         
         
        
    </div>
    
    <div >
      <form action='' class="search-form">
      <input type="search" id="search-box" placeholder="search here...."></input>
      <label for="search-box" class="fas fa-search"></label>
      </form>
    </div>
    

    







    </div>
    
  )
}

export default Header