import React  from 'react'
import Top from '../main/Top'
import Intro from '../main/Intro'
import Testimonials from '../main/Testimonials'
import FooterNav from '../main/FooterNav'

import '../../App.scss';
// import '../../design/MobileStyle.css'
import Footer from '../shop/footer/Footer'

export default function Home () {
    return (
        <>
            <Top />
            <Intro />
            <Testimonials />
            <FooterNav />
            <Footer />
        </>
    );
}