import React, {useContext, useState} from 'react'
import {useStripe} from '@stripe/react-stripe-js'
import { CartContext } from '../../../context/CartContext'
import {fetchFromAPI} from '../../../helpers'

function StripeCheckout() {
    const [email, setEmail] = useState('');
    const {cartItems} = useContext(CartContext);

    const handleGuestCheckout = () => {}
    return (
       <form onSubmit={handleGuestCheckout}>
           <div>
               <input type='email'
               onChange={e => setEmail(e.target.value)}
               placeholder='Email'
               value={email}
               className='nomad-input'
               />
           </div>

           <div className='submit-btn'>
               <button type='submit' className='button is-black nomad-btn submit'>
                   Checkout
               </button>
           </div>
       </form>
    )
}

export default StripeCheckout
