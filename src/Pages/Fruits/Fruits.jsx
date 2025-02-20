import React from 'react'
import './Fruits.css'
const Fruits = () => {
  return (
    <section class="products" id="products">
        <h1 class="heading">Our <span>Fruits</span></h1>


        <div class=" swiper product-slider">
        <div class="swiper-wrapper">
        <div class="swiper-slide box">
<img src='https://img.freepik.com/free-photo/orange-juicy-ripe-circle-citrus_1172-203.jpg?ga=GA1.1.2009052630.1735911999&semt=ais_hybrid" alt=""'></img>
<h3>Fresh Orange</h3>
            <div class="price">1Kg  Rs.30 </div>
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
<img src='https://img.freepik.com/free-photo/white-wine-bottle-grapes-isolated-white_167946-26.jpg?ga=GA1.1.2009052630.1735911999&semt=ais_hybrid" alt=""'></img>
<h3>Fresh Grapes</h3>
            <div class="price"> 1Kg  Rs.60</div>
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
<img src='https://img.freepik.com/free-photo/pineapple-fruit_74190-4912.jpg?ga=GA1.1.2009052630.1735911999&semt=ais_hybrid" alt=""'></img>
<h3>Fresh Pinapple</h3>
            <div class="price">1Kg  Rs.100 </div>
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

        <div class=" swiper product-slider">
        <div class="swiper-wrapper">
        <div class="swiper-slide box">
<img src='https://img.freepik.com/premium-photo/ripe-yellow-mango-with-cut-half-green-leaf-isolated-white-background_252965-516.jpg?ga=GA1.1.2009052630.1735911999&semt=ais_hybrid" alt=""'></img>
<h3>Fresh Mango</h3>
            <div class="price">1Kg  Rs.100 </div>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <div class="btn">Add to Cart</div>

           {/* <Link to='/shop' class="btn">Shop Now</Link>*/}
        </div>
        </div>
        <div class="swiper-wrapper">
        <div class="swiper-slide box">
<img src='https://img.freepik.com/free-photo/yellow-banana-fruit_74190-4830.jpg?ga=GA1.1.2009052630.1735911999&semt=ais_hybrid" alt=""'></img>
<h3>Fresh Banana</h3>
            <div class="price"> 1dozen  Rs.30</div>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <div class="btn">Add to Cart</div>

           {/* <Link to='/shop' class="btn">Shop Now</Link>*/}
           </div>
        </div>
        
        </div>

        </section>
  )
}

export default Fruits