import React from 'react'

import blog from '../../images/blog.png'
import cart from '../../images/cart.png'
import email from '../../images/email.png'
import home from '../../images/home.png'
import footer2 from '../../images/footer2.png'
import footer3 from '../../images/footer3.png'


export default function FooterNav () {
    return (
        <>
        <div className = "footer">
            {/* <img src={footer3} className="pink" alt="pink tie died in footer" />
            <img src={footer2} className="blue" alt="blue tie died in footer" /> */}
            <div className="icons">
                <img src={home} className="home" alt="home icon"/>
                <img src={blog} className="blog" alt="blog icon" />
                <img src={cart} className="cart" alt="shopping cart"/>
                <img src={email} className="email" alt="email icon"/>
            </div>
        </div>
        </>
    )
}
