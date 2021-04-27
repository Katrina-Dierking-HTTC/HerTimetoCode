import React from 'react'
import KD from '../../images/KD.png'
import {IntroInvWrap, IntroWrap, InviteWrap} from '../design/IntroStyles'

function Intro() {
    return (
      <IntroInvWrap>

        <IntroWrap>
            <div className="hero">
           <img src={KD} className="hero-title"/>
           </div>
        </IntroWrap>

        <InviteWrap>
            <div className="introBox">
                <h2 className ="welcome">Welcome to my digital playground -</h2>
                <h4 className="welcome-desc">Where I master new skills and share them with the world. If you <a href="https://github.com/Katrina-Dierking/HerTimetoCode">view my code,</a> you'll see a mixture of languages and frameworks as I work to add to my skillset.</h4>
                <h2 className = "AreYou"><em>Are you ...</em></h2>
            </div>

            <div className = "boxes">
                <div className="choice one">
                    <div className = "top">
                        <div className="icon top-one">
                            <i class="fas fa-search"></i>
                        </div>
                        <div className="choice-title top-two">A RECRUITER? </div>
                    </div>
                    <div className="bottom">
                        <p className="botDesc">If you're looking for new talent to hire, check out my <a href="https://katrina-dierking.netlify.app/portfolio">portfolio.</a></p>
                    </div>
                </div>
                
                
                
                <div className="choice two">
                    <div className = "top">
                            <div className="icon top-one">
                                <i class="fas fa-code"></i>
                            </div>
                            <div className="choice-title top-two">AN ASPIRING DEVELOPER?</div>
                    </div>
                    <div className="bottom">
                        <p className="botDesc">If you're looking to learn HTML/CSS, JavaScript, React, etc, check out the <a href = "">HTTC shop</a> for visual aid learning tools and products.</p>
                    </div>
                </div>
                
                <div className="choice three">
                        <div className = "top">
                                <div className="icon top-one">
                                <i class="far fa-handshake"></i>
                                </div>
                                <div className="choice-title top-two"><p>A BUSINESS?</p> </div>
                        </div>
                        <div className="bottom">
                            <p className="botDesc">Do you need a website designed, built, or remodeled? Contact me <a href="https://katrina-dierking.netlify.app/contact">here</a> and we'll schedule a time to go over your business needs.</p>
                        </div>
                </div>
            </div>
            
           
        </InviteWrap>

        </IntroInvWrap>
    
    )
}

export default Intro
