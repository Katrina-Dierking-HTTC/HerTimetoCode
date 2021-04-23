import React, { useContext } from 'react';
// import { isInCart } from '../../helpers';
// import { CartContext } from '../../context/cart-context'; 
import { withRouter } from 'react-router-dom';
import './featuredProduct.styles.scss';

const FeaturedProduct = (props) => {
  const { title, image, price, history, id, description } = props;
  const product = { title, image, price, id,  description };
//   const { addProduct, cartItems, increase } = useContext(CartContext);
//   const itemInCart = isInCart(product, cartItems);
  return (
    <div className='featured-product'>
      <div className='featured-image' onClick={() => history.push(`/product/${id}`)}>
        <img src={image} alt='product' />
      </div>
      <div className='name-price'>
        <h3>{title}</h3>
        <p>$ {price}</p>
      
   
          <button 
            className='button is-black nomad-btn'
            // onClick={() => {}
            // addProduct(product)}
            >
              ADD TO CART</button>
        
          <button 
            className='button is-white nomad-btn'
            id='btn-white-outline'
            // onClick={()=> increase(product)}
            >
              ADD MORE</button>
       
        

        <button 
            className='button is-black nomad-btn'
            onClick={() => (product)}>
              ADD TO CART</button>
      </div>
    </div>
  );
}

export default withRouter(FeaturedProduct);