import React from 'react'
import { Link } from 'react-router-dom';
import '../../shop/hero/hero.styles.scss';

const Hero = () =>{
    return (
        
            <section className="hero is-info is-large hero-image">
                <div className="hero-body">
                    <div className='container'>
                        <h1 className="hero-title">
                       Web Development just got easier.
                        </h1>
                        <div className='shop-now-btn'>
                            <button className='button is-black' id='shop-now' >
                            <Link to='/shopPage'>
                                SHOP NOW
                            </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
       
    )
}

export default Hero;
