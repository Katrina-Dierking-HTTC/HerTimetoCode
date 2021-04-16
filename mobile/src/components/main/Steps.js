import React from 'react'
import styled from 'styled-components'

export default function Steps () {

    return (
        <>
        
            <StepWrapper>
              
                    <img src = "https://hertimetocode.com/wp-content/uploads/2021/04/steps-e1618424581376.png"/>
                    <div className = "steps">
                        <h4 className = "step-box">Choose your learning path.</h4>
                        <h4 className = "step-box">Get the learning tools that best meet your needs.</h4>
                        <h4 className = "step-box">Join the HTTC Coffee | Code | Community to build and/or strengthen your skills.</h4>
                    </div>
                   
         
            </StepWrapper>
       
        </>
    )
}



//////////////////////////////////////////////////////////////////

const StepWrapper = styled.div`
    margin: 2% 0 0 30%;
    display:flex;

    .step-box {
        width: 20vw;
        padding: 5% 3% 5% 5%;
        border: 1px solid teal;
        margin-left: 5%;
    }

`

