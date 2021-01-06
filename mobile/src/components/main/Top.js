import React from 'react'
import {useMediaQuery} from 'react-responsive'
import logo from '../../images/logo.png'
// import hamburger from '../../images/hamburger.png'

export default function Top () {

    const isPhone = useMediaQuery({query: '(max-width: 500px)'})

    return (
        <>

        <div className="topSection">
                <img src={logo} alt="girl at desk"  className = "corner-logo"/>
                {/* <img src = {hamburger} alt="hamburger menu" className = "hamburger" /> */}

               <section className = "hamburger">
                
                    <ul className="menu">
                        <li title="home"><a href="#" class="menu-button home">menu</a></li>
                        <li title="search"><a href="#" class="search">search</a></li>
                        <li title="pencil"><a href="#" class="pencil">pencil</a></li>
                        <li title="about"><a href="#" class="active about">about</a></li>
                        <li title="archive"><a href="#" class="archive">archive</a></li>
                        <li title="contact"><a href="#" class="contact">contact</a></li>
                    </ul>

                    <ul className="menu-bar">
                        <li><a href="#" class="menu-button">Menu</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Contact</a></li>

                    </ul>
               </section>
        </div>


        </>
    )
}