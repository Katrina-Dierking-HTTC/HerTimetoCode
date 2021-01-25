import React from 'react'
import Hi from '../../images/Hi.png'
import me from '../../images/me.png'

import styled from 'styled-components'

export default function IntroDesk () {

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
    border: 2px solid green;
    max-width: 100%;
    display:flex;
    position:relative;
    flex-direction:row;
    margin-top: -30%;
    margin-left: 2%;
    z-index: 99999;


    .me {
        max-width: 80%;
        padding-top:5%;
    }
`

const IntroText = styled.div`
    max-width: 50%;
    margin-left: -10%;
    margin-top: 5%;
    padding: 2%;
    

    .name {
        max-width: 117%;
        padding-bottom: 7%;
        margin-left: -25%;
        margin-top:-10%;
        z-index: 99999;
    }

    .introP {
        font-size: .80rem;
        margin-left: 3%;
    }
`

const CTAWrap = styled.div`
    margin-top: -4.1%;
    background-color: #EFE1CD;
    max-width: 100%;
    max-width: 100%;
    display:flex;
    flex-direction:row;
    background-image: linear-gradient(to right, rgb(251,240,208), rgb(237,208,171));
    box-shadow: 1px .5px 5px 1px black;
    border: 2px solid black;

    .CtaP{
        max-width: 75%;
        font-size: .75rem;
        text-align:center;
        padding: 2% 7%;
        margin-top: 2%;

    }

    .CtaButton {
        font-size: .70rem;
        background-color: #17c436;
        margin: 3%;
    }
`

const IntroTabWrapper = styled.div`
    border:2px solid red;
`
