import React from 'react'
import Top from '../main/Top'
import FooterNav from '../main/FooterNav'
import styled from 'styled-components'

export default function About () {
    return (
            <>
            <Top />
                <AboutTopWrapContent>
                    <h3 className = "aboutH2Header"> About Katrina Dierking | Her Time to Code</h3>
                </AboutTopWrapContent>
              
            <AboutBody>
                
            </AboutBody>

            <FooterNav />

            </>
    )
}

const AboutTopWrapContent = styled.div`
    height: 70px;
    position: relative;
    border-bottom: 1px solid;
    box-shadow: 5px .5px 8px 3px black;

    .aboutH2Header {
        height: 50px;
        background: teal;
        position: relative;
        border-bottom: 1.5px solid black;
        color:white;
        padding-left: 2%;
        padding-top:2%;
        font-size: 1rem;
        font-weight: 300;
      }
      
`

const AboutBody = styled.div`
    padding: 3%;
        height: 150px;
        background: lightgray;
        margin-top:-1%;
    
`