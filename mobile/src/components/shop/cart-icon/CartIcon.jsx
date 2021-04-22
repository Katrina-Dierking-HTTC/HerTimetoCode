import React from 'react'
import shoppingCart from '../../../images/shoppingCart.png'
import './cartIcon.styles.scss'

function CartIcon() {
    return (
        <div className ='cart-container'>
            <img src={shoppingCart} alt ='shopping-cart-icon' />
            <span className='cart-count'>5</span>
            
        </div>
    )
}

export default CartIcon;
