import React from 'react'

const Dairy = () => {
  return (
    <section class="products" id="products">
    <h1 class="heading">Our <span>Fruits</span></h1>


    <div class=" swiper product-slider">
    <div class="swiper-wrapper">
    <div class="swiper-slide box">
<img src='https://img.freepik.com/free-photo/delicious-bread-table_144627-12457.jpg?ga=GA1.1.2009052630.1735911999&semt=ais_hybrid" alt=""'></img>
<h3>Fresh Breads</h3>
        <div class="price"> Rs.30 </div>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <div class="btn">Add to Cart</div>

        {/*<Link to='/shop' class="btn">Shop Now</Link>*/}
    </div>
    </div>
    <div class="swiper-wrapper">
    <div class="swiper-slide box">
<img src='https://img.freepik.com/premium-vector/carton-milk-packaging-with-glass-milk_575838-1398.jpg?ga=GA1.1.2009052630.1735911999&semt=ais_hybrid" alt=""'></img>
<h3>Fresh Milk</h3>
        <div class="price"> 1L Rs.70</div>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <div class="btn">Add to Cart</div>

        {/*<Link to='/shop' class="btn">Shop Now</Link>*/}
        </div>
    </div>
    
    </div>
    
</section>
  )
}

export default Dairy