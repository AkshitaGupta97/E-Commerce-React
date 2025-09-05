
import React from 'react'
import '../Components/Popular/popular.css'
import new_collections from '../assets/newCollections'
import Item from '../Components/Navbar/Items/Item'

function Newcollection() {
  return (
    <div className='popular'>
        <h2 className='popular-heading'>New Collections... </h2>
        <div className="popular-item">
            {
                new_collections.map((item, i) => {
                    return(
                        <Item key={i} id={item.id} name={item.name}
                        image={item.image} new_price={item.new_price} old_price={item.old_price}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Newcollection