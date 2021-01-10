import React from 'react'
import blogImg from '../../images/blogImg.png'
import styled from 'styled-components'
import {useMediaQuery} from 'react-responsive'

export default function Hero () {

    const isPhone = useMediaQuery({query: '(max-width: 500px)'})
    const isTablet = useMediaQuery({query:'(min-width: 501px)'})
    const isBetween = useMediaQuery({query:'(min-width: 501px)' && '(max-width: 800px)'})
    const isDesktop = useMediaQuery({query: '(min-width:801px)'})


    return (
        <>

        {isPhone &&
        <HeroWrapper>
            <img src = {blogImg} className = "hero" alt = "hero section with call to action" />
                <HeroText> 
                    <h2 className= "heroH2"><i>If you've ever dreamed of living life on your own terms
                         and having the financial security to do it, </i>
                    </h2>
                    <h3 className = "heroH3">becoming a <span className = "webdev">Web Developer</span> is the answer and I can help you get there.</h3>
                </HeroText>
        </HeroWrapper>
        }

        {isTablet &&
        <HeroWrapper2>
            <img src = {blogImg} className = "hero" alt = "hero section with call to action" />
            <HeroText2> 
                <h2 className= "hero2H2"><i>If you've ever dreamed of living life on your own terms
                    and having the financial security to do it, </i>
                </h2>
                <h3 className = "hero2H3">becoming a <span className = "webdev">Web Developer</span> is the answer and I can help you get there.</h3>
            </HeroText2>
        </HeroWrapper2>
        }

    
        </>
    )
}

const HeroWrapper = styled.div`
    display:flex; 
    flex-direction: column;
`

const HeroText = styled.div `
    margin:-53% 30% 0% 2%;
    padding: 0 2%;
    border-top: 4px solid #0b667b;
    border-left:4px solid #0b667b;
    border-right: 2px solid #353535;
    border-bottom: 2px solid #353535;
    padding: 10px;
    // background: #f0f0f0;

`


const HeroWrapper2 = styled.div`
display:flex; 
flex-direction: column;
`

const HeroText2 = styled.div `
margin:-53% 30% 0% 2%;
padding: 0 2%;
border-top: 4px solid #0b667b;
border-left:4px solid #0b667b;
border-right: 2px solid #353535;
border-bottom: 2px solid #353535;
padding: 10px;
// background: #f0f0f0;

`