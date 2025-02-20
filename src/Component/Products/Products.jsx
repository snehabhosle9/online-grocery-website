import React, { useEffect } from 'react'
import './Products.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { findProducts } from '../../State/Products/Action';


const Products = () => {

    const dispatch = useDispatch()

  const { products } = useSelector(state => state.products);
  console.log(products)

  useEffect(() => {
    dispatch(findProducts())
  }, [])

  return (
    <section class="products" id="products">
        <h1 class="heading">Our <span>Products</span></h1>


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
            
            <Link to='' class="btn">Add To Cart</Link>
        </div>
        </div>
        <div class="swiper-wrapper">
        <div class="swiper-slide box">
<img src='https://img.freepik.com/free-photo/bell-pepper_1339-1599.jpg?ga=GA1.1.2009052630.1735911999&semt=ais_hybrid" alt=""'></img>
<h3>Fresh Capsicum</h3>
            <div class="price"> 1Kg  Rs.50</div>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            
            <Link to='' class="btn">Add To Cart</Link>
        </div>
        </div>
        <div class="swiper-wrapper">
        <div class="swiper-slide box">
<img src='https://img.freepik.com/premium-photo/red-onion-isolated-white-background_403166-344.jpg?ga=GA1.1.2009052630.1735911999&semt=ais_hybrid" alt=""'></img>
<h3>Fresh Onion</h3>
            <div class="price">1Kg  Rs.30 </div>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            
            <Link to='' class="btn">Add To Cart</Link>
        </div>
        </div>
        </div>


        <div class=" swiper product-slider">
        <div class="swiper-wrapper">
        <div class="swiper-slide box">
<img src='https://img.freepik.com/premium-vector/carton-milk-packaging-with-glass-milk_575838-1398.jpg?ga=GA1.1.2009052630.1735911999&semt=ais_hybrid" alt=""'></img>
<h3>Fresh Milk</h3>
            <div class="price">1L  Rs.70 </div>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <Link to='' class="btn">Add To Cart</Link>
        </div>
        </div>
        <div class="swiper-wrapper">
        <div class="swiper-slide box">
<img src='https://img.freepik.com/premium-photo/raw-potato-isolated-white-background-with-clipping-path_88281-117.jpg?ga=GA1.1.2009052630.1735911999&semt=ais_hybrid" alt=""'></img>
<h3>Fresh Potato</h3>
            <div class="price">1Kg  Rs.30 </div>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            
            <Link to='' class="btn">Add To Cart</Link>
        </div>
        </div>
        <div class="swiper-wrapper">
        <div class="swiper-slide box">
<img src='https://img.freepik.com/free-photo/white-wine-bottle-grapes-isolated-white_167946-26.jpg?ga=GA1.1.2009052630.1735911999&semt=ais_hybrid" alt=""'></img>
<h3>Fresh Grapes</h3>
            <div class="price">1Kg  Rs.60 </div>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            
            <Link to='' class="btn">Add To Cart</Link>
        </div>
        </div>
        </div>
        <div class=" swiper product-slider">
        <div class="swiper-wrapper">
        <div class="swiper-slide box">
<img src='https://img.freepik.com/free-photo/pineapple-fruit_74190-4912.jpg?ga=GA1.1.2009052630.1735911999&semt=ais_hybrid" alt=""'></img>
<h3>Fresh Pinapple</h3>
            <div class="price"> Rs.100 </div>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            
            <Link to='' class="btn">Add To Cart</Link>
        </div>
        </div>
        <div class="swiper-wrapper">
        <div class="swiper-slide box">
<img src='https://img.freepik.com/premium-photo/fresh-carrots-vegatables-isolated-white_80510-413.jpg?ga=GA1.1.2009052630.1735911999&semt=ais_hybrid" alt=""'></img>
<h3>Fresh Carrot</h3>
            <div class="price">1Kg  Rs.40 </div>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            
            <Link to='' class="btn">Add To Cart</Link>
        </div>
        </div>
        <div class="swiper-wrapper">
        <div class="swiper-slide box">
<img src='https://img.freepik.com/free-photo/lemon-table_144627-22178.jpg?ga=GA1.1.2009052630.1735911999&semt=ais_hybrid" alt=""'></img>
<h3>Fresh Lemon</h3>
            <div class="price">1Kg  Rs.80 </div>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            
            <Link to='' class="btn">Add To Cart</Link>
        </div>
        </div>
        </div>


        <div class=" swiper product-slider">
        <div class="swiper-wrapper">
        <div class="swiper-slide box">
<img src='https://img.freepik.com/premium-photo/tomato-basil-leaves-isolated_183352-1515.jpg?ga=GA1.1.2009052630.1735911999&semt=ais_hybrid" alt=""'></img>
<h3>Fresh Tomatos</h3>
            <div class="price">1Kg  Rs.30 </div>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            
            <Link to='' class="btn">Add To Cart</Link>
        </div>
        </div>
        <div class="swiper-wrapper">
        <div class="swiper-slide box">
<img src='https://img.freepik.com/premium-photo/green-pepper-vegetables-white_183352-793.jpg?ga=GA1.1.2009052630.1735911999&semt=ais_hybrid" alt=""'></img>
<h3>Fresh Chilli</h3>
            <div class="price">1Kg  Rs.30 </div>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            
            <Link to='' class="btn">Add To Cart</Link>
        </div>
        </div>
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
            
            <Link to='' class="btn">Add To Cart</Link>
        </div>
        </div>
        </div>


        <div class=" swiper product-slider">
        <div class="swiper-wrapper">
        <div class="swiper-slide box">
<img src='https://img.freepik.com/free-photo/delicious-bread-table_144627-12457.jpg?ga=GA1.1.2009052630.1735911999&semt=ais_hybrid" alt=""'></img>
<h3>Fresh Bread</h3>
            <div class="price">Rs.30 </div>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            
            <Link to='' class="btn">Add To Cart</Link>
        </div>
        </div>
        <div class="swiper-wrapper">
        <div class="swiper-slide box">
<img src='https://img.freepik.com/free-photo/yellow-banana-fruit_74190-4830.jpg?ga=GA1.1.2009052630.1735911999&semt=ais_hybrid" alt=""'></img>
<h3>Fresh Banana</h3>
            <div class="price">1 dozen  Rs.30 </div>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            
            <Link to='' class="btn">Add To Cart</Link>
        </div>
        </div>
        <div class="swiper-wrapper">
        <div class="swiper-slide box">
<img src='data:image/jpeg;base64,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'></img>
<h3>Fresh Garlic</h3>
            <div class="price">1Kg  Rs.70 </div>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            
            <Link to='' class="btn">Add To Cart</Link>
        </div>
        </div>
        </div>
    </section>
  )
}

export default Products