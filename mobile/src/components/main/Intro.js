import React from 'react'
import Home_me from '../../images/Home_me.png'
import Home_frame from '../../images/Home_frame.png'

export default function Intro () {
    return (
        <section className="intro">
            <div className = "pic">
                 <img src = {Home_frame} alt = "frame around Katrina's picture on home page" className = "frame" />
                <img src = {Home_me} alt="Katrina Dierking, Founder of Her Time to Code" className = "HomeImg" />
            </div>

            <div className = "intro-text">
                <h1 className = "hi">Hi,</h1>
                <h3 className = "Katrina">I'm Katrina Dierking</h3>
                <p className = "home-intro">I give women the tools they need today to 
                 become the skilled web developers of tomorrow. </p>
            </div>
    </section>
    );
}