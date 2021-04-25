import React  from 'react'
import Top from '../main/Top'
import Steps from '../main/Steps'
import Intro from '../main/Intro'
import Testimonials from '../main/Testimonials'
import FooterNav from '../main/FooterNav'

import '../../App.scss';
import "../design/MobileStyle.css"
import Footer from '../shop/footer/Footer'
import Invite from '../main/Invite'

export default function Home () {
    return (
        <>
            <Top />
            <Intro />
            {/* <Invite /> */}
            <Testimonials />
            <FooterNav />
            <Footer />
        </>
    );
}