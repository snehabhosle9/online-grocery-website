import React from 'react'
import Products from '../../Component/Products/Products'
import Category from '../../Component/Category/Category'
import Home_Section from '../../Component/Home_Section/Home_Section'
import Features from '../../Component/Features/Features'
import Review_Section from '../../Component/Review_Section/Review_Section'
import Blogs from '../../Component/Blogs/Blogs'



const Home = () => {
  return (
    <div>
      <Home_Section/>
      <Category />
      <Products />
      <Features/>
      <Review_Section/>
      <Blogs/>
      

        </div>
  )
}

export default Home