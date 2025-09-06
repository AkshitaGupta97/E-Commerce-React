
import React from 'react'
import Hero from '../Components/Navbar/Hero'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offers/Offer'
import Newcollection from '../NewCollection/Newcollection'
import Newsletter from '../Components/NewsLetter/Newsletter'

function Shop() {
  return (
    <div>
        <Hero/>
        <Popular />
        <Offer />
        <Newcollection />
        <Newsletter />

    </div>
  )
}

export default Shop