import React from 'react'
import {withRouter} from 'react-router-dom'
import HTMLGlanceSp from '../../../images/HTMLGlanceSp.png'
import '../mainSection.styles.scss'


function MainSection({history}) {
    return (
        <div className='main-section-container'>
            <div className='main-section-middle'>
                <div className='ms-m-image'>
                    <img src={HTMLGlanceSp} alt='HTML & CSS at a Glance Reference Cards'/>
                </div>
                <div className='ms-m-description'>
                    <h2>Designed for beauty. Crafted for learning.</h2>
                    <p>
                        Get all the key points of each HTML/CSS component in one place.With 20 quick reference cards, you can always have your much needed information right at your fingertips. Print and laminate for longer-lasting reference cards.
                    </p>
                    <button className='button is-black' id='shop-now' onClick = {() => history.push('/product/1')}>
                        HTML/CSS at a Glance Reference Cards
                    </button>
                </div>
            </div>
        </div>
    )
}

export default withRouter (MainSection);
