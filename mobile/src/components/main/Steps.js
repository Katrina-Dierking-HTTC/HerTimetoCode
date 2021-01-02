import React from 'react'
import step1 from '../../images/step1.png'
import step2 from '../../images/step2.png'
import step3 from '../../images/step3.png'
import hover_Blue_Print from '../../images/hover_Blue_Print.png'


export default function Steps () {
    return (
        <>
        <div className="stepsContainer">
            <div className = "stepsBox">
                    <div class="card1">
                        <img src={step1} className = "step1" alt="step 1 to becoming a web developer" />
                        <img src={hover_Blue_Print} className = "step1b" alt = "Web Dev Blue Print" />
                        {/* <div className = "step1p">Step 1</div> */}
                    </div>
                    <img src={step2} className = "step2" alt="step 2 to becoming a web developer" />
                    <img src={step3} className = "step3" alt="step3 to becoming a web developer" />
            </div>
            <div className="stepsDesc">
                    <p>In just three easy steps, you can start your journey
to launching your own freelancing business as a 
web developer, or land your first web developer job.</p>
            </div>

         </div>
              
        </>
    )
}