
import React from 'react'
import Hero from '../Components/Navbar/Hero'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offers/Offer'
import Newcollection from '../NewCollection/Newcollection'

function Shop() {
  return (
    <div>
        <Hero/>
        <Popular />
        <Offer />
        <Newcollection />
    </div>
  )
}

export default Shop