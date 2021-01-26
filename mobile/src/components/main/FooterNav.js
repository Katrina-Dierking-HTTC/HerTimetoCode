import React from 'react'

import blog from '../../images/blog.png'
import cart from '../../images/cart.png'
import email from '../../images/email.png'
import home from '../../images/home.png'


export default function FooterNav () {
    return (
        <>
        <div className = "footer">
            <div className="icons">
                <a href = "/"><img src={home} className="home" alt="home icon"/></a>
                <a href = "https://blog.hertimetocode.com"><img src={blog} className="blog" alt="blog icon" /></a>
                <a href = "/shop"><img src={cart} className="cart" alt="shopping cart"/></a>
                <a href = "mailto:katrina@hertimetocode.com"><img src={email} className="email" alt="email icon"/></a>
            </div>
        </div>
        </>
    )
}
