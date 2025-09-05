import React from 'react'
import './Popular.css'
import data_product from '../../assets/data'
import Item from '../Navbar/Items/Item'

function Popular() {
  return (
    <div className='popular'>
      <h2 className='popular-heading'>Popular Collections... </h2>
      <div className="popular-item">
        {
          data_product.map((item, i) => {
            return (
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

export default Popular