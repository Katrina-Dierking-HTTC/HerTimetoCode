import React from 'react'
import Hi from '../../images/Hi.png'
import me from '../../images/me.png'

import styled from 'styled-components'


export default function IntroTablet () {

    return (

        <IntroTabWrapper>
<section className="intro">
    <div className = "pic">
        <img src = {me} className = "meT" alt = "Katrina Dierking | Founder of Her Time to Code"/>      
    </div>

    <div className = "intro-text">
        <h1 className = "hiT">Hi,</h1>
        {/* <h3 className = "KatrinaT">I'm Katrina Dierking</h3>
        <p className = "home-introT">I give women the tools they need today to 
         become skilled web developers of tomorrow. </p> */}
    </div>
</section>
</IntroTabWrapper>
    )
}



const IntroTabWrapper = styled.div`
    border: 2px solid green;
`