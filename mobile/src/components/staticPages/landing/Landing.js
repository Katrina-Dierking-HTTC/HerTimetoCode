import React from 'react'
import {HomeWrapper, NameWrapper, BioWrapper} from './LandingStyle'
import KDHead from '../../../images/KDHead.png'
import FooterNav from '../../main/FooterNav'

function Landing() {
    return (
        <HomeWrapper>
            <NameWrapper>
                <div className="firstName">Katrina</div>
                <div className="lastName">DIERKING</div>
                <div className="jobTitle">Frontend Web Developer</div>
            </NameWrapper>
            <BioWrapper>
                <img src={KDHead} className="profileImg" alt="Katrina Dierking headshot. Web Developer"/>
                <div className="rotatingText-content">
                    <h2 className="rotatingText-description">Hi, I'm Katrina and I have a passion for ...</h2>
                    <br></br>
                    <br></br>
                        <h3 className="rotatingText-adjective">Frontend Development,</h3>
                        <h3 className="rotatingText-adjective">changing lives with technology, </h3>
                        <h3 className="rotatingText-adjective"> and learning new languages & frameworks!</h3>
                </div>
            </BioWrapper>
            {/* <BottomWrapper>
                <div className = "botBtn">
                    <Link to="/about" className="botLink">About</Link>
                    <span className="BorderTopBottom"></span>
                    <span className="BorderLeftRight"></span>
                </div>

                <div className = "botBtn">
                    <Link to="/projects" className="btnLink">Projects</Link>
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

                <div className = "botBtn">
                    <Link to="Contact" className="botLink">Contact</Link>
                    <span className="BorderTopBottom"></span>
                    <span className="BorderLeftRight"></span>
                </div>  
            </BottomWrapper> */}
            <FooterNav/>
        </HomeWrapper>
    )
}

export default Landing
