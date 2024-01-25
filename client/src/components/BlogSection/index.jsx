import React from 'react'
import "./index.scss"
const BlogSection = () => {
  return (
    <section id='blog'>
  
   <div className="main-title">
    <h2>WINE'S BLOG</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</p>
    <button>View All Products<i class="fa-solid fa-arrow-right"></i></button>
   </div>

   <div className="cards">
   <div className="left-side">
    <img src="https://preview.colorlib.com/theme/wines/images/img_1.jpg" alt="" />
    <h3>What You Need To Know About Premium Rosecco</h3>
    <p className='info'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
    <p>Dave Rogers in News</p>
   </div>
   <div className="between-point">
   <img src="https://preview.colorlib.com/theme/wines/images/img_2.jpg" alt="" />
    <h3>What You Need To Know About Premium Rosecco</h3>
    <p className='info'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
    <p>Dave Rogers in News</p>
   </div>
   <div className="right-side">
   <img src="https://preview.colorlib.com/theme/wines/images/img_3.jpg" alt="" />
    <h3>What You Need To Know About Premium Rosecco</h3>
    <p className='info'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
    <p>Dave Rogers in News</p>
   </div>
   </div>
     
    
    </section>
  )
}

export default BlogSection