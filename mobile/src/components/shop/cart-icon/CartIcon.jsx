import React, {useContext} from 'react'
import { CartContext } from '../../../context/CartContext'
import {withRouter} from 'react-router-dom'
import shoppingCart from '../../../images/shoppingCart.png'
import './cartIcon.styles.scss'

function CartIcon({history}) {
    const { itemCount, cartItems } = useContext(CartContext);
    console.log('CartItems:', cartItems)
    return (
        <div className ='cart-container'
            onClick={() => history.push('./cart')}>
            <img src={shoppingCart} alt ='shopping-cart-icon' />
            {
                itemCount > 0 ? <span className='cart-count'>{itemCount}</span> : null
            } 
        </div>
    )
}

export default withRouter(CartIcon);
