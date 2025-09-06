
import React from 'react'
import './newsletter.css'

function Newsletter() {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on Your Email</h1>
        <p>Subscribe to our newsletter and stayUpdated</p>
        <div className='news-img-part'>
            <img src="https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-wow-surprised-women-design-transparent-free-download-png-image_13035360.png" width='60%' height='60%' alt="newsletter" />
            <div className='newsPart'>
                <input type="email" placeholder='Your Email ..' />
                <button>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter