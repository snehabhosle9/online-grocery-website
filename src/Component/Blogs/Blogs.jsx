import React from 'react'
import './Blogs.css'

const Blogs = () => {
  return (
    <section class="blogs" id="blogs">
    <h1 class="heading">Our <span>Blogs</span> </h1>
    <div class="box-container">
    <div class="box">
<img src='https://img.freepik.com/free-photo/top-view-vegetables-as-pepper-tomato-garlic-dill-spilling-out-sack-black-surface_141793-16499.jpg?ga=GA1.1.2009052630.1735911999&semt=ais_hybrid" alt=""'></img>
<div class="content">
<div class="icons">
<a href="#"><i class="fas fa-user"></i>By User</a>
<a href="#"><i class="fas fa-calendar"></i>1st may,2021</a>
</div>
<h3>Fresh And Organic Vegetables And Fruits</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, beatae.</p>
<a href="#" class="btn">Read More</a>
</div>
    </div>
    <div class="box">
<img src='https://img.freepik.com/free-photo/vegetables-wooden-bucket_114579-18604.jpg?ga=GA1.1.2009052630.1735911999&semt=ais_hybrid" alt=""'></img>
<div class="content">
<div class="icons">
<a href="#"><i class="fas fa-user"></i>By User</a>
<a href="#"><i class="fas fa-calendar"></i>23rd jan, 2020</a>
</div>
<h3>Fresh And Organic Vegetables And Fruits</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, beatae.</p>
<a href="#" class="btn">Read More</a>
</div>
    </div>

    <div class="box">
<img src='https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38004.jpg?ga=GA1.1.2009052630.1735911999&semt=ais_hybrid" alt=""'></img>
<div class="content">
<div class="icons">
<a href="#"><i class="fas fa-user"></i>By User</a>
<a href="#"><i class="fas fa-calendar"></i>5th march,2023</a>
</div>
<h3>Fresh And Organic Vegetables And Fruits</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, beatae.</p>
<a href="#" class="btn">Read More</a>
</div>
    </div>
</div>
    </section>
  )
}

export default Blogs