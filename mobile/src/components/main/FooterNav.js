import React from 'react'
import {Link} from 'react-router-dom'

import blog from '../../images/blog.png'
import cart from '../../images/cart.png'
import email from '../../images/email.png'
import home from '../../images/home.png'


export default function FooterNav () {
    return (
        <>
        <div className = "footer">
            <div className="icons">
                <Link to = "/"><img src={home} className="home" alt="home icon"/></Link>
                <a href = "https://blog.hertimetocode.com"><img src={blog} className="blog" alt="blog icon" /></a>
                <Link to = "/shop"><img src={cart} className="cart" alt="shopping cart"/></Link>
                <a href = "mailto:katrina@hertimetocode.com"><img src={email} className="email" alt="email icon"/></a>
            </div>
        </div>
        </>
    )
}
