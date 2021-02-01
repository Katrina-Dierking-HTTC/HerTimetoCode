import React from 'react'
// import ReactTooltip from 'react-tooltip'
import Top from '../main/Top'
import FooterNav from '../main/FooterNav'
import styled from 'styled-components'

export default function About () {
    return (
            <>
            <Top />
                <AboutTopWrapContent>
                    <h2 className = "aboutH2Header"> About Her Time to Code</h2>
                    <div class="circle-border"></div>
                    <div class="circle">
                        {/* <i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i> */}
                    </div>
                </AboutTopWrapContent>

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

const AboutTopWrapContent = styled.div`
    height: 70px;
    position: relative;
    border-bottom: 1px solid;
    box-shadow: 5px .5px 8px 3px black;

    .aboutH2Header {
        height: 80px;
        background: teal;
        z-index: 0;
        position: relative;
        border-bottom: 2px solid black;
        z-index: 1;
        color:white;
        padding-left: 38%;
        padding-top:2%;
      }
      
      .circle-border {
        width: 60px;
        height: 43px;
        border-radius: 50%;
        bottom: -32px;
        position: absolute;
        margin: 0 auto;
        left: 0;
        right: 0;
        border: 3px solid;
        z-index: 0;
      }
      .circle {
        width: 60px;
        height: 50px;
        background: teal;
        border-radius: 50%;
        bottom: -30px;;
        position: absolute;
        margin: 0 auto;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 30px;
        line-height: 60px;
        z-index: 2;
      }
      

`

const AboutBody = styled.div`
    padding: 3%;
        height: 150px;
        background: lightgray;
        margin-top:-1%;
    
`