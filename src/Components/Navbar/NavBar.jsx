import React, { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [menu,setMenu] = useState('');
  return (
    <div className='navbar '>
        <div className="nav-logo">
            <img src="https://png.pngtree.com/png-vector/20240723/ourmid/pngtree-shopping-bag-logo-with-colors-vector-png-image_7280181.png" alt="" width='80px'height='80px'  />
            <p className='nav-logo-name'><i>Family<span id='spanHub'>Style</span></i></p>
        </div>

        <ul className="nav-menu">
            <li onClick={()=>{setMenu('home')}}><Link style={{textDecoration:"none", color:'#971515'}} to='/'>Home</Link>{menu==='home' ? <hr></hr>:<></>}</li>
            <li onClick={()=>{setMenu('mens')}}> <Link style={{textDecoration:"none",  color:'#971515'}} to='/mens' >Mens</Link> {menu==='mens' ? <hr></hr>: <></>}</li>
            <li onClick={()=>{setMenu('womens')}}> <Link style={{textDecoration:"none", color:'#971515'}} to='/womens'>Women</Link> {menu==='womens' ? <hr></hr>: <></>}</li>
            <li onClick={()=>{setMenu('kids')}}> <Link style={{textDecoration:"none", color:'#971515'}} to='/kids' >Kids</Link> {menu==='kids' ? <hr></hr>: <></>}</li>
        </ul>
        <div className="nav-login">
            <Link to='login'><button className='login-btn'>Login</button></Link>
            <Link to='cart' ><button className='cart-icon'><img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3213984/shopping-cart-icon-sm.png" alt="cart" width='30px' height='28px' /><span id='cartNumber'>0</span> Cart</button></Link>
        </div>
    </div>
  )
}

export default NavBar