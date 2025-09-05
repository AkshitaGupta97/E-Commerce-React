
import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className='Hero'>
      <div className="hero-part">
        <h1>Welcome to Our Store</h1>
        <p className='hero-text'>Discover the best products at unbeatable prices. 
          <span> Shop now</span> and elevate your lifestyle with our exclusive collection!</p>
        <button className='shop-now-btn'>Shop Now</button>
      </div>

      <div className="brands-ticker">
        <div className="brands-track">
          <span>
            Lotus &nbsp; |  Zara &nbsp; | &nbsp; H&M &nbsp; | &nbsp; Levi's &nbsp; | &nbsp; Gucci &nbsp; | &nbsp; Adidas &nbsp; 
            | &nbsp; Nike &nbsp; | &nbsp; Puma &nbsp; | &nbsp; Louis Vuitton &nbsp; | &nbsp; Uniqlo &nbsp; | &nbsp; 
            Burberry &nbsp; | &nbsp; Versace &nbsp; | &nbsp; Prada &nbsp; | &nbsp; Mango &nbsp; | &nbsp; Tommy Hilfiger &nbsp; 
            | &nbsp; Calvin Klein  | &nbsp; Allen Solly &nbsp; | &nbsp; Biba &nbsp; | &nbsp; Peter England &nbsp; | &nbsp; FabIndia &nbsp; |
          </span>
        </div>
      </div>

    </div>
  )
}

export default Hero