import React from 'react'
import Top from '../main/Top'
import FooterNav from '../main/FooterNav'

import { BodyWrap, ContactWrap, IconWrap } from '../design/ContactStyle'

export default function Contact () {
    return (
        <>
        <Top />
        <BodyWrap>
        <ContactWrap>
            <h3 className = "contactH3">CONTACT ME</h3>
            <p> I'd love to hear from you.</p>
        </ContactWrap>

        <IconWrap>
        <br></br>
    
          
                <div>
                <a href = "https://github.com/Katrina-Dierking">
                    <img src="https://hertimetocode.com/wp-content/uploads/2021/04/github-space1.png" 
                        alt="github icon" 
                        className = "icon"
                    />
                </a>
                </div>

                <div>
                <a href = "https://www.linkedin.com/in/kalynn-dier/">
                    <img src="https://hertimetocode.com/wp-content/uploads/2021/04/linkedin-space2.png" 
                        alt="linkedIn icon"
                        className = "icon"
                        />
                </a>
                </div>

                <div>
                <a href = "mailto:katrina@hertimetocode.com">
                    <img src="https://hertimetocode.com/wp-content/uploads/2021/04/email-space3.png" 
                        alt="email icon"
                        className = "icon"
                        />
                </a>
                </div>
          
        </IconWrap>
        </BodyWrap>
        <FooterNav />

        </>
    )
}

