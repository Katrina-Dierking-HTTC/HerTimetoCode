import React, {useContext} from 'react'
import { CartContext } from '../../../context/CartContext'
import shoppingCart from '../../../images/shoppingCart.png'
import './cartIcon.styles.scss'

function CartIcon() {
    const { itemCount } = useContext(CartContext);
    return (
        <div className ='cart-container'>
            <img src={shoppingCart} alt ='shopping-cart-icon' />
            {
                itemCount > 0 ? <span className='cart-count'>5</span> : null
            }
            
            
            
        </div>
    )
}

export default CartIcon;
