
import React from 'react'
import './Offer.css'

function Offer() {
  return (
    <div className='offer'>
        <div className="offer-left">
          <h1>Exclusive Deals!</h1>
          <h2>Upto 50% Off</h2>
          <p>On all premium products</p>
          <p>Only on best Seller Products. </p>
          <button>Shop Now</button>
        </div>
        <div className="offer-right">
          <img src="https://static.vecteezy.com/system/resources/previews/045/809/885/original/a-wedding-dress-on-a-transparent-background-free-png.png" width='70%' height='70%' alt="dress" />
        </div>

    </div>
  )
}

export default Offer