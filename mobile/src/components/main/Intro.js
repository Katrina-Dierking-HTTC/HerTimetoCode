import React from 'react'
import me from '../../images/me.png'
import hi1 from '../../images/hi1.png'
import dots from '../../images/dots.png'
import mobileHTTC from '../../images/mobileHTTC.png'
import {IntroWrapper, HeroWrapper, Intro} from '../design/IntroStyle'


export default function IntroTablet () {

    return (

    <IntroWrapper>
         <HeroWrapper>
            <img src = {dots} className = "hero" alt = "hero section with call to action" />
            <img src = {mobileHTTC} className = "top" alt = "HTTC logo in cursive" />
        </HeroWrapper>
    
        <Intro>
            <div className = "intro-pix">
                <img src = {me} className = "me" alt = "Katrina Dierking | Founder of Her Time to Code"/>      
                <img src = {hi1} className = "name2" alt = "introduction from Katrina Dierking | Founder of Her Time to Code" />
            </div>
        
            <p className = "home-intro">I give women the tools they need today to 
            become skilled web developers of tomorrow. </p>
        </Intro>
    </IntroWrapper>
    )
}

