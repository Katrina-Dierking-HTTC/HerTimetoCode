import React from 'react'
import Top from '../../main/Top'
import Footer from '../../shop/footer/Footer'
import {Link} from 'react-router-dom'
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
                <a href = "https://github.com/Katrina-Dierking" target="_blank"><i class="fas fa-cogs"></i></a>
                <h3 className="optTitle">PROJECTS</h3>
                <p className = "proDesc">
                    Checkout a few of my projects. Some are a continual work in progress. Feel free to add suggestions and feedback.</p>
            </div>

            <div className = 'option two'>
                <a href="https://blog.hertimetocode.com"
                    target="_blank">
                <i class="fas fa-pencil-alt"></i></a>
                <h3 className="optTitle">BLOG</h3>
                <p className = "proDesc">
                    Follow my journey through web development. Join me as I master new concepts and create the tools to help others to do the same. 
                </p>
            </div>

            <div className = 'option three'>
               <Link to='./about'>
               <i class="far fa-smile-wink"></i></Link>
                <h3 className="optTitle">ABOUT</h3>
                <p className = "proDesc">Am I a pet person? Do I have any crazy quirks? There's only one way to find out.</p>
            </div>
        </Options>

        <Samples>
            <div className = "carosel">Sample Carosel</div>
        </Samples>

        <Vision>
            <img src="https://images.unsplash.com/photo-1523289217630-0dd16184af8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" className="visionImg" alt=""/>

            <div className="vision">
            <i class="fas fa-bullseye"></i>
                <h2 className= "visTitle">My goals for the future in Web Development</h2>
                <p className = "visDesc">desc</p>
                <p className= "visGoals">Goals</p>
                <ul className = "goalsList">
                    <li>
                        <icon></icon>
                        <p></p>
                    </li>
                    <li>
                        <icon></icon>
                        <p></p>
                    </li>
                    <li>
                        <icon></icon>
                        <p></p>
                    </li>
                    
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
