import React from 'react'
import NavBar from '../main/NavBar'
import Top from '../main/Top'
import Header from '../main/Header'
import Steps from '../main/Steps'
import Hero from '../main/Hero'
import CTA from '../main/CTA'
import Intro from '../main/Intro'
import Testimonials from '../main/Testimonials'
import FooterNav from '../main/FooterNav'
import '../../App.css';
import "../design/MobileStyle.css"
import logo from '../../images/logo.png'

export default function Home () {
    return (
        <>
         <Top />
         <Hero />
         {/* <CTA />  */}
        {/* <Header />  */}
        <Intro />
        <Steps />
        {/* <Testimonials /> */}
        <FooterNav />
       

        </>
    );
}