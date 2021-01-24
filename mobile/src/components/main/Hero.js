import React from 'react'
import dots from '../../images/dots.png'
import cursive1 from '../../images/cursive1.png'
import mobileHTTC from '../../images/mobileHTTC.png'
import styled from 'styled-components'
import {useMediaQuery} from 'react-responsive'

export default function Hero () {

    const isPhone = useMediaQuery({query: '(max-width: 500px)'})
    const isTablet = useMediaQuery({query:'(min-width: 501px)'})
    // const isBetween = useMediaQuery({query:'(min-width: 501px)' && '(max-width: 800px)'})
    // const isDesktop = useMediaQuery({query: '(min-width:801px)'})


    return (
        <>

        {isPhone &&
        <HeroWrapper>
            <img src = {dots} className = "hero" alt = "hero section with call to action" />
            <img src = {mobileHTTC} className = "top" alt = "HTTC logo in cursive" />
   
        </HeroWrapper>
        }

        {isTablet &&
        <HeroWrapper2>
            <img src = {dots} className = "hero" alt = "hero section with call to action" />
            <img src = {cursive1} className = "top2" alt = "Her Time to Code Title and Subtitle" />
        
        </HeroWrapper2>
        }

    
        </>
    )
}

const HeroWrapper = styled.div`
    display:flex; 
    flex-direction: column;
    margin-top:2%;
    min-width:100%;

    .hero {
        max-width: 100%;
        margin-top: 1%;
        opacity: 0.25;
        z-index:0;
    }

    .top {
        max-width:100%;
        margin-top:-65%;
        padding:1%;
        z-index: 99999;
    }

`

// const HeroText = styled.div `
//     margin:-57% 20% 0% 2%;
//     padding: 0 2%;
//     border-top: 4px solid #0b667b;
//     border-left:4px solid #0b667b;
//     border-right: 2px solid #353535;
//     border-bottom: 2px solid #353535;
//     // padding: 10px;
//     // background: #f0f0f0;

// `


const HeroWrapper2 = styled.div`
display:flex; 
flex-direction: column;
`

// const HeroText2 = styled.div `
// margin:-53% 30% 0% 2%;
// padding: 0 2%;
// border-top: 4px solid #0b667b;
// border-left:4px solid #0b667b;
// border-right: 2px solid #353535;
// border-bottom: 2px solid #353535;
// padding: 10px;
// // background: #f0f0f0;

