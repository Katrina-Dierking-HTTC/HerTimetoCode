import React from 'react'
import RevealLeft from './RevealLeft'
import styled from 'styled-components'



export default function Steps () {
    return (
        <>
        
            <StepWrapper>
                <div className="stepsContainer">
                    <div className = "stepsBox">
                        <RevealLeft />
                    </div>
                <div className="stepsDesc">
                    <p>In just three easy steps, you can start your journey
                    to launching your own freelancing business as a 
                    web developer, or land your first web developer job.</p>
                </div>
            </div>
            </StepWrapper>
       
        </>
    )
}

const StepWrapper = styled.div`
    max-width: 100%;
    // border: 10px solid #0b667b;
    padding:5% 5% 2%;
    // margin: 3% 5% 2% 3%;
    position:absolute;

    .stepsDesc {
        font-size: .75rem;
        padding: 2% 3% 1%  5%;
        // border: 2px solid black;
        margin-top: -5%;
      }
`