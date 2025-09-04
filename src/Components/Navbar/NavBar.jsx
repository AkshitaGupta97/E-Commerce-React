import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar '>
        <div className="nav-logo">
            <img src="https://png.pngtree.com/png-vector/20240723/ourmid/pngtree-shopping-bag-logo-with-colors-vector-png-image_7280181.png" alt="" width='100px'height='80px'  />
            <p className='nav-logo-name'><i>Style <span>Hub</span></i></p>
        </div>

        <ul className="nav-menu">
            <li>Home</li>
            <li>Mens</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>
        <div className="nav-login">
            <button className='login-btn'>Login</button>
            <button className='signup-btn'>SignUp</button>
            <button className='cart-icon'>🛒 Cart</button>
        </div>
    </div>
  )
}

export default NavBar