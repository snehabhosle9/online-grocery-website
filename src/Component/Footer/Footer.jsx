import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    
    <section class="footer">
      <div class="box-container">
      <div class="box">
      <h3>Grocery <i class="fas fa-shopping-basket"></i></h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, illum!</p>
      <div class="share">
                <a href="#" class="fab fa-facebook-f"></a>
                <a href="#" class="fab fa-twitter"></a>
                <a href="#" class="fab fa-instagram"></a>
                <a href="#" class="fab fa-linkedin"></a>
            </div>
      </div>
      <div class="box">

            <h3>Contact info</h3>
            <a href="#" class="links"><i class="fas fa-phone"></i>+123-456-7890</a>
            <a href="#" class="links"><i class="fas fa-phone"></i>+111-222-3333</a>
            <a href="#" class="links"><i class="fas fa-envelope"></i>sbhosle@gmail.com</a>
            <a href="#" class="links"><i class="fas fa-map-marker-alt"></i>mumbai, india-400104</a>

        </div>

        <div class="box">

            <h3>Quick links</h3>
            <a href="#" class="links"><i class="fas fa-arrow-right"></i>home</a>
            <a href="#" class="links"><i class="fas fa-arrow-right"></i>features</a>
            <a href="#" class="links"><i class="fas fa-arrow-right"></i>products</a>
            <a href="#" class="links"><i class="fas fa-arrow-right"></i>categories</a>
            <a href="#" class="links"><i class="fas fa-arrow-right"></i>review</a>
            <a href="#" class="links"><i class="fas fa-arrow-right"></i>Blogs</a>
        </div>

        <div class="box">

<h3>newsletter</h3>
<p>subscribe for latest updates</p>
<input type="email" placeholder="your email" class="email"></input>
<input type="submit" value="Subscribe" class="btn"></input>

</div>
        
        
      </div>
      <div class="credit"> Created by <span>ms.sneha bhosle</span>  | All Rights Reserved </div>
    </section>
  )
}

export default Footer