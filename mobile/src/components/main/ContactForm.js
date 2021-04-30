import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {ContForm} from '../design/ContactStyle'


const ContactForm =(props) => {

    const [contact, setContact] = useState({name:""})

    const handleChanges = (event) => {
        console.log("handled change!", event.target.value);

        setContact({
            name: event.target.value, 
            email:event.target.value,
            url:event.target.value, 
        })
    }

    console.log("contact", contact);
    return (
        <div>
            <h4 className = "conFormIntro">Are you a business in need of a website/application? Fill out the form below and I will be in touch with you within 2 business days.</h4>
          
            <ContForm>
                <form className="contactForm">
                    <div className = "inputInfo">
                        <label htmlFor="name">Name</label>
                        <input  id="name" type="text" placeholder="First and Last Name" onChange={handleChanges}/>
                    </div>

                    <div className = "inputInfo">
                        <label htmlFor>Email</label>
                        <input id="email" type="email" placeholder="Email" />
                    </div>

                    <div className = "inputInfo">
                        <label htmlFor="url">Website URL</label>
                        <input id="url" type="text" placeholder="website url"/>
                    </div>

                    <div className= "inputInfo">
                        <label htmlFor="business needs"> What are your business needs</label>
                        <input id = "business needs"/>
                        <textarea onChange={handleChanges}>

                        </textarea>
                    </div>

                    
                </form>
            </ContForm>
        </div>
    )
}

export default ContactForm
