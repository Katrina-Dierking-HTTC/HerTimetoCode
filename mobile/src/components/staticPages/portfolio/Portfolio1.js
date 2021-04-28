import React from 'react'
import Top from '../../main/Top'
import Footer from '../../shop/footer/Footer'
import {Port, Header, Options, Samples, Vision, Skills, FindMe} from '../../design/PortStyle'

function Portfolio1() {
    return (
        <>
        <Top/>

        

        <Header>
        <section className="hero-section">
            <section className="hero is-info is-large hero-image">
                <div className="hero-box">
                    <div className="hero-container">
                        <h5 className="hero-title">Welcome to the Portfolio of</h5>
                        <h1 className = "hero-name">Katrina Dierking</h1>
                        <h5 className="hero-title">Full-Stack Web Developer</h5>
                    </div>
                </div>
            </section>
        </section>
        </Header>

        <Port>
        <Options>
            <div className = 'option one'>
                <i className="fas fa-robot"></i>
                <h3>Projects</h3>
                <p>desc</p>
            </div>

            <div className = 'option two'>
                <i className="fas fa-atom"></i>
                <h3>Blog</h3>
                <p>desc</p>
            </div>

            <div className = 'option three'>
                <i className="fas fa-bolt"></i>
                <h3>About</h3>
                <p>desc</p>
            </div>
        </Options>

        <Samples>
            <div className = "carosel">Sample Carosel</div>
        </Samples>

        <Vision>
            <img src="" className="visionImg" alt=""/>

            <div className="vision">
                <icon>*</icon>
                <h2>title</h2>
                <p>desc</p>
                <p>Goals</p>
                <ul>
                    <li><icon></icon></li>
                    <li><icon></icon></li>
                    <li><icon></icon></li>
                </ul>
            </div>
        </Vision>

        <Skills>
            <div className ="skillsBox">
                <h2>I've got stills</h2>
                <p>and I'm not afraid to use them.</p>

                <div><img src=""></img></div>
            </div>

            <div className = "lists">
                <ul className = "listOne">
                    <li>pne</li>
                    <li>two</li>
                    <li>three</li>
                    <li>four</li>
                    <li>five</li>
                    <li>six</li>
                </ul>
                <ul className = "listTwo">
                    <li>pne</li>
                    <li>two</li>
                    <li>three</li>
                    <li>four</li>
                    <li>five</li>
                    <li>six</li>
                </ul>
            </div>

        </Skills>

        <FindMe>
            <h2>You can find me here ... </h2>
            <div className="icon-links">
                <img src=""/>
                <img src=""/>
                <img src=""/>
                <img src=""/>
            </div>

        </FindMe>
        </Port>

        <Footer/>

        </>
    )
}

export default Portfolio1
