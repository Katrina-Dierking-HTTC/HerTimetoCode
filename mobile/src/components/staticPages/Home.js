import React from 'react'
import NavBar from '../main/NavBar'
import Header from '../main/Header'
import Steps from '../main/Steps'
import Intro from '../main/Intro'
import '../../App.css';
import "../design/MobileStyle.css"
import logo from '../../images/logo.png'

export default function Home () {
    return (
        <>
         <div className ="corner-logo">
                <img src={logo} alt="girl at desk" />
        </div>
        <Header />
        <Intro />
        <Steps />
       

        </>
    );
}