import React, {createContext, useState} from 'react'
import itemData from '../components/shop/index'

export const ProductsContext = createContext ();

const ProductsContextProvider = ({children}) => {
    const [products] = useState(itemData);

    return (
        <ProductsContext.Provider value = {{products}}>
            {
                children
            }
        </ProductsContext.Provider>
    );
}
  export default ProductsContextProvider;