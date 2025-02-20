import React from 'react'
import './Category.css'
import { Link } from 'react-router-dom'
const Category = () => {
  return (
    <section class="categories" id="categories">
<h1 class="heading">Product <span>Categories</span></h1>
<div class="box-container">
<div class="box">
<img src='https://img.freepik.com/premium-photo/group-vegetables_36007-27.jpg?ga=GA1.1.2009052630.1735911999&semt=ais_hybrid" alt=""'></img>
<h3> Fresh Vegetables</h3>

<Link to='/vegetables' class="btn">Vegetables</Link>
</div>

<div class="box">
<img src='https://img.freepik.com/premium-photo/ripe-exotic-fruits-isolated-white-background_185193-59121.jpg?ga=GA1.1.2009052630.1735911999&semt=ais_hybrid" alt=""'></img>
<h3>Fresh Fruits</h3>

<Link to='/fruits' class="btn">Fruits</Link>
</div>

<div class="box">
<img src='https://img.freepik.com/premium-photo/fresh-dairy-table_392895-375299.jpg?ga=GA1.1.2009052630.1735911999&semt=ais_hybrid" alt=""'></img>
<h3>Dairy Products</h3>

<Link to='/dairy' class="btn">Dairy</Link>
</div>

</div>

    </section>
  )
}

export default Category