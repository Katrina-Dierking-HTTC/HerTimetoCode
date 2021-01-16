import React from 'react'
import Home_me from '../../images/Home_me.png'
import Home_frame from '../../images/Home_frame.png'
import Hi from '../../images/Hi.png'
import me from '../../images/me.png'
import {useMediaQuery} from 'react-responsive'
import styled from 'styled-components'

export default function Intro () {

    
    const isPhone = useMediaQuery({query: '(max-width: 500px)'})
    const isTablet = useMediaQuery({query:'(min-width: 501px)'})
    const isBetween = useMediaQuery({query:'(min-width: 501px)' && '(max-width: 800px)'})
    const isDesktop = useMediaQuery({query: '(min-width:801px)'})


    return (
        <>

        {isPhone &&
            <MeWrapper>
                <div className = "phoneTopPic">

                    <img src = {me} className = "me" alt = "Katrina Dierking | Founder of Her Time to Code"/>
                </div>

                <IntroText>
                    <img src = {Hi} className = "name" alt = "introduction from Katrina Dierking | Founder of Her Time to Code" />
                    {/* <h1 className = "hi1">Hi,</h1>
                    <h3 className = "Katrina1">I'm Katrina Dierking</h3> */}
                    <p className = "introP">I give women the tools they need today to 
                    become skilled web developers of tomorrow. </p>
                </IntroText>
            </MeWrapper>
        }


        {isTablet &&
        <section className="intro">
            <div className = "pic">
                <img src = {me} className = "me" alt = "Katrina Dierking | Founder of Her Time to Code"/>      
            </div>

            <div className = "intro-text">
                <h1 className = "hi">Hi,</h1>
                <h3 className = "Katrina">I'm Katrina Dierking</h3>
                <p className = "home-intro">I give women the tools they need today to 
                 become skilled web developers of tomorrow. </p>
            </div>
        </section>
        }
        </>
    );
}

const MeWrapper = styled.div `
    max-width: 100%;
    display:flex;
    flex-direction:row;
    margin-top: 25%;
    margin-left: 2%;


    .me {
        max-width: 80%;
        padding-top:5%;
    }
`

const IntroText = styled.div`
    max-width: 50%;
    margin-left: -10%;
    margin-top: 5%;
    padding: 4%;
    

    .name {
        max-width: 100%;
        padding-bottom: 7%;
    }

    .introP {
        font-size: .80rem;
        margin-left: 3%;
    }
`