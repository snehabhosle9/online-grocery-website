import React from 'react'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import Home_Section from './Component/Home_Section/Home_Section'
import Features from './Component/Features/Features'
import Products from './Component/Products/Products'
import Category from './Component/Category/Category'
import Review_Section from './Component/Review_Section/Review_Section'
import Blogs from './Component/Blogs/Blogs'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/About.jsx/Home'
import Menu from './Pages/Menu/Menu'
import Cart from './Pages/Cart/Cart'
import Vegetables from './Pages/Vegetables/Vegetables'
import Fruits from './Pages/Fruits/Fruits'
import Dairy from './Pages/Dairy/Dairy'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/review' element={<Review_Section/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/cartt' element={<Cart/>}/>
       <Route path='/vegetables' element={<Vegetables/>}/>
       <Route path='/fruits' element={<Fruits/>}/>
        <Route path='/dairy' element={<Dairy/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    {/*<Footer/>*/}
    </BrowserRouter>
   
  )
}

export default App