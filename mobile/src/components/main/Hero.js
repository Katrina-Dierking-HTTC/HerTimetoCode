import React from 'react'
import dots from '../../images/dots.png'

import mobileHTTC from '../../images/mobileHTTC.png'
import styled from 'styled-components'


export default function Hero () {

    // const isPhone = useMediaQuery({query: '(max-width: 500px)'})
    // const isTablet = useMediaQuery({query:'(min-width: 501px)'})
    // const isDesktop = useMediaQuery({query: '(min-width:801px)' && '(max-width: 1200px)'})
    // const {isWide} = useMediaQuery({query:'(min-width: 1201px)' && '(max-width: 2400px)'})


    return (
        <>
        <HeroWrapper>
            <img src = {dots} className = "hero" alt = "hero section with call to action" />
            <img src = {mobileHTTC} className = "top" alt = "HTTC logo in cursive" />
        </HeroWrapper>
    
        </>
    )
}

const HeroWrapper = styled.div`
    display:flex; 
    flex-direction: column;
    margin-top:2%;
    min-width:100%;


    .hero {
        max-width: 100vw;
        opacity: 0.2;
        // z-index:1;
    }

    .top {
        max-width:65vw;
        position:absolute;
        padding: 0 2% 0 2%;
        margin-left: 30vw;
    }
`


