import React, { useContext } from 'react';
import { CartContext } from '../../../../context/CartContext';
import Layout from '../../shared/Layout';
import CartItem from './CartItem';
import Total from './Total';
import './cartPage.styles.scss';

const CartPage = () => {
  const { cartItems, itemCount, total, increase, decrease, removeProduct, clearCart } = useContext(CartContext);
  const functions = { increase, decrease, removeProduct }
  return (
    <Layout>
      <>
        <h1>Cart</h1>
        {
          cartItems.length === 0 ? <div className='empty-cart'>Your Cart is empty</div>
          : 
          <>
            <div className='cart-page'>
              <div className='cart-item-container'>
                {
                  cartItems.map(item  => <CartItem { ...item } key={item.id} { ...functions }/>)
                }
              </div>
              <Total itemCount={itemCount} total={total} clearCart={clearCart} />
            </div>
          </>
        }
      </>
    </Layout>
  );
}

export default CartPage;
