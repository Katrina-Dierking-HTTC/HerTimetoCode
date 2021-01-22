import React from 'react'
import Top from '../main/Top'
import FooterNav from '../main/FooterNav'
import styled from 'styled-components'

export default function Contact () {
    return (
        <>
        <Top />
        <ContactWrap>
            <h3 className = "contactH3">CONTACT</h3>
            <p> We'd love to hear from you.</p>
        </ContactWrap>
        <FooterNav />
        </>
    )
}

const ContactWrap = styled.div`
    border: 1px solid black;
    padding: 3%;
`