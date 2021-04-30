import React, {useState} from 'react'
import Top from '../main/Top'
import FooterNav from '../main/FooterNav'

import { BodyWrap, ContactWrap, IconWrap } from '../design/ContactStyle'
import ContactForm from '../main/ContactForm'

export default function Contact () {

    const [contact, setContact] = useState ([
        {
            id: 1, 
            name: "Katrina Dierking",
            email: "katrina@hertimetocode.com",
            url: "hertimetocode.com"

        }
    ])

    const addNewContact = contact => {
        const newContact = {
            id: Date.now(),
            name: contact.name, 
            url: contact.url
        }

        setContact ([...contact, newContact]);
    }
    return (
        <>
        <Top />
        <BodyWrap>
        <ContactWrap>
            <h3 className = "contactH3">CONTACT ME</h3>
            <p> I'd love to hear from you.</p>
        </ContactWrap>

        <ContactForm />

        {/* <IconWrap>
        <br></br>
    
          
                <div>
                <a href = "https://github.com/Katrina-Dierking">
                    <img src="https://hertimetocode.com/wp-content/uploads/2021/04/github-space1.png" 
                        alt="github icon" 
                        className = "iconSoc"
                    />
                </a>
                </div>

                <div>
                <a href = "https://www.linkedin.com/in/kalynn-dier/">
                    <img src="https://hertimetocode.com/wp-content/uploads/2021/04/linkedin-space2.png" 
                        alt="linkedIn icon"
                        className = "iconSoc"
                        />
                </a>
                </div>

                <div>
                <a href = "mailto:katrina@hertimetocode.com">
                    <img src="https://hertimetocode.com/wp-content/uploads/2021/04/email-space3.png" 
                        alt="email icon"
                        className = "iconSoc"
                        />
                </a>
                </div>
          
        </IconWrap> */}
        </BodyWrap>
        <FooterNav />

        </>
    )
}

