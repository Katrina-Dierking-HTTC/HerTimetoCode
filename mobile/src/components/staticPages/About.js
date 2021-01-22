import React from 'react'
// import ReactTooltip from 'react-tooltip'
import Top from '../main/Top'
import FooterNav from '../main/FooterNav'
import styled from 'styled-components'

export default function About () {
    return (
            <>
            <Top /> 
            <AboutTopWrap>
                <h2 className = "aboutH2"> About Her Time to Code</h2>
                
            </AboutTopWrap>

            <AboutBody>
                <h3 className = "aboutH3">Who we are</h3>
                <p>
                    Her Time to Code was born out of a need for women to have a safe, non-threatening, encouraging place for women to learn, practice, and master web development. 
                </p>

                <p>
                    Through learning tools, tutorials, collaboration, and community, Her Time to Code offers a place for women to build their skills and portfolios. 
                </p>
            </AboutBody>

            <FooterNav />

            </>
    )
}

const AboutTopWrap = styled.div`
    border: 1px solid black;
    margin:2% 0;
    padding: 3%;
    background-color: teal;

`

const AboutBody = styled.div`
    border: 1px solid red;
    padding: 3%;
`