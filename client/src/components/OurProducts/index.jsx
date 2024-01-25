import React from 'react'
import "./index.scss"

const OurProducts = () => {
  return (
    <section id='drinking'>
        <div className="title">
            <h2>OUR PRODUCTS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</p>
            <button>VIEW ALL PRODUCTS <i class="fa-solid fa-arrow-right"></i></button>
        </div>
     <div className="products">
     <div className="left">
        <img src="https://preview.colorlib.com/theme/wines/images/wine_2.png" alt="" />
        <h4>Trius Cabernet France 2011</h4>
        <p>$629.00</p>
    </div>
    <div className="between">
        <img src="https://preview.colorlib.com/theme/wines/images/wine_3.png" alt="" />
        <h4>Trius Cabernet France 2011</h4>
        <p>$629.00</p>
    </div>
    <div className="right">
        <img src="https://preview.colorlib.com/theme/wines/images/wine_1.png" alt="" />
        <h4>Trius Cabernet France 2011</h4>
        <p>$629.00</p>
    </div>
     </div>
    </section>
  )
}

export default OurProducts