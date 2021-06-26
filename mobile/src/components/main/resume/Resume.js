import React from 'react'

import FooterNav from '../FooterNav'
import {ResumeWrapper} from './ResumeStyle'
import resSS from '../../../images/resSS.png'

function Resume() {
    return (
        <ResumeWrapper>
            <div className = "topRes">RESUME</div>
            <div className= "resSS"><img src={resSS} alt="resume screenshot" /></div>
            <a href="https://blog.hertimetocode.com/wp-content/uploads/2021/06/KatrinaDierkingResume.pdf" className='pdf'>
                Thank you for taking the time to view my resume.</a>
            <p className ="resP">Please feel free to download it as well.</p>
            <FooterNav/>
        </ResumeWrapper>
    )
}

export default Resume
