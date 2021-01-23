import React  from 'react'
import Top from '../main/Top'
import Steps from '../main/Steps'
import Hero from '../main/Hero'
import Intro from '../main/Intro'
import Testimonials from '../main/Testimonials'
import FooterNav from '../main/FooterNav'

import '../../App.css';
import "../design/MobileStyle.css"

export default function Home () {
    return (
        <>
            <Top />
            <Hero />
            <Intro />
            <Steps />
            <Testimonials />
            <FooterNav />
        </>
    );
}