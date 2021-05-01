import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {ContForm} from '../design/ContactStyle'


const ContactForm =(props) => {

    const [contact, setContact] = useState({
        //may need to change to email:""
        name:props.name, 
        email: props.email, 
        url:props.url, 
        body:""
    })

    const handleChanges = (event) => {
        console.log("handled change!", event.target.value);
        const newStateObj = { ...contact, [event.target.name]: event.target.value}

        setContact(newStateObj)
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewContact(contact);

        setContact({name:"", email:"", url:"",body:""})
    }

    console.log("contact", contact);
    return (
        <div>
            <h4 className = "conFormIntro">Are you a business in need of a website/application? Fill out the form below and I will be in touch with you within 2 business days.</h4>
          
            <ContForm>
                <form onSubmit={submitForm}
                    className="contactForm">
                    <div className = "inputInfo">
                        <label htmlFor="name">Name</label>
                        <input  
                            id="name" 
                            type="text" 
                            placeholder="First and Last Name"
                            name="name"
                            value={contact.name}
                            onChange={handleChanges}/>
                    </div>

                    <div className = "inputInfo">
                        <label htmlFor>Email</label>
                        <input 
                            id="email" 
                            type="email" 
                            placeholder="Email" 
                            name="email"
                            value={contact.email}
                            onChange={handleChanges}
                        />
                    </div>

                    <div className = "inputInfo">
                        <label htmlFor="url">Website URL</label>
                        <input 
                            id="url" 
                            type="text" 
                            placeholder="website url"
                            name="url"
                            value={contact.url}
                            onChange={handleChanges}
                        />
                    </div>

                    <div className= "inputInfo">
                        <label htmlFor="body"> What are your business needs?</label>
                        <textarea 
                            input id = "body"
                            placeholder="Add your biz needs"
                            name="body"
                            value={contact.body}
                            onChange={handleChanges} >
                        </textarea>
                    </div>

                    <button type="submit">Submit Form</button>

                    
                </form>
            </ContForm>
        </div>
    )
}

export default ContactForm
