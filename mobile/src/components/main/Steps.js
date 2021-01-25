import React from 'react'
import Media from 'react-media'
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



//////////////////////////////////////////////////////////////////

const StepWrapper = styled.div`
    max-width: 80vw;
    padding:5% 5% 2%;
    margin: 0 10%;
    display:flex;
  
    justify-content: space-around;


    .stepsDesc {
        font-size: 1rem;
    
        margin-top: -2%;
        align-text: center;
        padding-left: 5%;

      }
`

