import React from 'react'
import blogImg from '../../images/blogImg.png'
import styled from 'styled-components'

export default function Hero () {
    return (
        <HeroWrapper>
        <img src = {blogImg} className = "hero" alt = "hero section with call to action" />
        
        <HeroText> 
            <h2 className= "heroH2"><i>If you've ever dreamed of living life on your own terms
                and having the financial security to do it, </i>
            </h2>
            <h3 className = "heroH3">becoming a <span className = "webdev">Web Developer</span> is the answer and I can help you get there.</h3>
        </HeroText>

        </HeroWrapper>
        
    )
}

const HeroWrapper = styled.div`
    display:flex; 
    flex-direction: column;
`

const HeroText = styled.div `
    // border: 2px solid  #0b667b;
    margin:-53% 30% 0% 2%;
    padding: 0 2%;

    // outline: 1px solid  #0b667b;
    border-top: 4px solid #0b667b;
    border-left:4px solid #0b667b;
    border-right: 2px solid #353535;
    border-bottom: 2px solid #353535;
    padding: 10px;
    // background: #f0f0f0;

`