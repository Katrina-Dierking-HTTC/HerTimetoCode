import React from 'react'
import {Link} from 'react-router-dom'
import { BottomWrapper } from '../staticPages/landing/LandingStyle'

export default function FooterNav () {
    return (
        <BottomWrapper>
                <div className = "botBtn">
                    <Link to="/landing" className="botLink">Home</Link>
                    <span className="BorderTopBottom"></span>
                    <span className="BorderLeftRight"></span>
                </div>

                <div className = "botBtn">
                    <Link to="/about" className="botLink">About</Link>
                    <span className="BorderTopBottom"></span>
                    <span className="BorderLeftRight"></span>
                </div>

                <div className = "botBtn">
                    <Link to="/projects" className="botLink">Projects</Link>
                    <span className="BorderTopBottom"></span>
                    <span className="BorderLeftRight"></span>
                </div>

                <div className = "botBtn">
                    <a href = "https://github.com/Katrina-Dierking"  target="_blank" rel="noreferrer" className="botLink">Github</a>
                    <span className="BorderTopBottom"></span>
                    <span className="BorderLeftRight"></span>
                </div>

                <div className = "botBtn">
                    <a href = "https://www.linkedin.com/in/kalynn-dier/" target="_blank" rel="noreferrer" className="botLink">LinkedIn</a>
                    <span className="BorderTopBottom"></span>
                    <span className="BorderLeftRight"></span>
                </div>

                <div className = "botBtn">
                    <Link to = "/resume" className="botLink">Resume</Link>
                    <span className="BorderTopBottom"></span>
                    <span className="BorderLeftRight"></span>
                </div>

            </BottomWrapper>
        
    )
}
