import React from 'react'
import logo from '../../images/logo.png'
import hamburger from '../../images/hamburger.png'

export default function Top () {
    return (
        <div className="topSection">
                <img src={logo} alt="girl at desk"  className = "corner-logo"/>
                <img src = {hamburger} alt="hamburger menu" className = "hamburger" />
        </div>
    )
}