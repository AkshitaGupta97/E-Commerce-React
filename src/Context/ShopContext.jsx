
import React, {createContext} from 'react'
import all_Products from '../assets/all_products';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextValue = {all_Products};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;