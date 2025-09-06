
import React, { useContext } from 'react'
import './CSS/shopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Navbar/Items/Item';
import all_Products from '../assets/all_products';

function ShopCategory(props) {
  const {all_Products} = useContext(ShopContext);
  console.log(all_Products);
  console.log(props);
  return (
    <div className='shop-category'>
        <img className='shop-banner' src={props.banner} alt={props.caregory} />
        
        <div className="shop-indexstore">
          <p>
            <span>Showing 1-12</span> out of 40 Products.
          </p>
          <div className="shopCategory-sort">
            Sort by <img src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/dropdown_arrow2-512.png" width='20px' height='20px' alt="" />
          </div>
        </div>

        <div className="shopCategory-products">
          {
            all_Products.map((item, i) => {
              if(props.category === item.category){
                return(
                  <Item key={i} id={item.id} name={item.name}
                  image={item.image} new_price={item.newPrice} old_price={item.oldPrice}
                  />
                )
              }
              else {
                return null;
              }
            })
          }
        </div>
        <div className="shop-loadmore">
          Explore More..
        </div>
    </div>
  )
}

export default ShopCategory