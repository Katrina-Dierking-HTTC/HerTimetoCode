import React from 'react'
import dots from '../../images/dots.png'

import mobileHTTC from '../../images/mobileHTTC.png'
import { HeroWrapper } from '../design/HeroStyle'


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