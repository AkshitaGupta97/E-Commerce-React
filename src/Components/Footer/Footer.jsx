import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src="https://png.pngtree.com/png-vector/20240723/ourmid/pngtree-shopping-bag-logo-with-colors-vector-png-image_7280181.png" alt="" width='80px'height='80px'  />
             <p className='nav-logo-name'><i>Family<span id='spanHub'>Style</span></i></p>            
        </div>
        <ul className="footer-links">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Help Center</li>
        </ul>
        <div className="footer-social-icon">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="facebook" width='30px' height='30px' />
            <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="twitter" width='30px' height='30px' />
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="instagram" width='30px' height='30px' />
        </div>
        <hr />
        <div className="footer-copy-right">
            <p>&copy; 2025 FamilyStyle. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer