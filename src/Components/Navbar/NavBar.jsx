import React, { useState } from 'react'
import './NavBar.css'

const NavBar = () => {
  const [menu,setMenu] = useState('');
  return (
    <div className='navbar '>
        <div className="nav-logo">
            <img src="https://png.pngtree.com/png-vector/20240723/ourmid/pngtree-shopping-bag-logo-with-colors-vector-png-image_7280181.png" alt="" width='80px'height='80px'  />
            <p className='nav-logo-name'><i>Family<span id='spanHub'>Style</span></i></p>
        </div>

        <ul className="nav-menu">
            <li onClick={()=>{setMenu('home')}}>Home{menu==='home' ? <hr></hr>:<></>}</li>
            <li onClick={()=>{setMenu('mens')}}>Mens{menu==='mens' ? <hr></hr>: <></>}</li>
            <li onClick={()=>{setMenu('womens')}}>Women {menu==='womens' ? <hr></hr>: <></>}</li>
            <li onClick={()=>{setMenu('kids')}}>Kids {menu==='kids' ? <hr></hr>: <></>}</li>
        </ul>
        <div className="nav-login">
            <button className='login-btn'>Login</button>
            <button className='cart-icon'><img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3213984/shopping-cart-icon-sm.png" alt="cart" width='30px' height='28px' /><span id='cartNumber'>0</span> Cart</button>
        </div>
    </div>
  )
}

export default NavBar