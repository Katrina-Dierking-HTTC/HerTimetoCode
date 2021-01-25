import React from 'react'
import Hi from '../../images/Hi.png'
import me from '../../images/me.png'

import styled from 'styled-components'

export default function Intro () {

    return (
        <>

                <section>
                        <MeWrapper>
                            <div className = "phoneTopPic">
                                <img src = {me} className = "me" alt = "Katrina Dierking | Founder of Her Time to Code"/>
                            </div>

                            <IntroText>
                                <img src = {Hi} className = "name" alt = "introduction from Katrina Dierking | Founder of Her Time to Code" />
                                <p className = "introP">I give women the tools they need today to 
                                become skilled web developers of tomorrow. </p>
                            
                            </IntroText>
                        </MeWrapper>
                        <hr></hr>

                            <CTAWrap>
                                <p className = "CtaP"> FREE Web Developer Course Blueprint {`>>`}</p>
                                <button className = "CtaButton">Get it now!</button>
                            </CTAWrap>
                        </section>

                        </>
    );
}


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const MeWrapper = styled.div `
    max-width: 100%;
    display:flex;
    position:relative;
    flex-direction:row;
    margin-top: -30%;
    margin-left: 2%;
    z-index: 99999;


    .me {
        max-width: 25vw;
        // padding-top:1%;
    }
`

const IntroText = styled.div`
    max-width: 50%;
    margin-left: -10%;
    margin-top: 5%;
    padding: 2%;
    

    .name {
        max-width: 35vw;
        padding-bottom: 2%;
        margin-left: 15%;
        margin-top:-30%;
        z-index: 99999;
    }

    .introP {
        font-size: 1rem;
        margin-left: 27%;
        border: 2px solid red;
        min-width: 65vw;
    }
`

const CTAWrap = styled.div`
    margin-top: -4.1%;
    background-color: #EFE1CD;
    max-width: 100vw;
    display:flex;
    flex-direction:row;
    background-image: linear-gradient(to right, rgb(251,240,208), rgb(237,208,171));
    box-shadow: 1px .5px 5px 1px black;

    .CtaP{
        min-width: 70vw;
        font-size: 1rem;
        text-align:center;
        padding: 2% 2%;
        margin-top: 2%;
    }

    .CtaButton {
        min-width: 25vw;
        font-size: .85rem;
        background-color: #17c436;
        margin:3%;
    }
`

