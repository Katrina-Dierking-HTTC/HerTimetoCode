import React from 'react'
import Top from '../main/Top'
import Footer from '../shop/footer/Footer'
import {Link} from 'react-router-dom'
import skillsBG from '../../images/skillsBG.jpg'
import monkey from '../../images/monkey.png'
import {Port, Header, Options, Samples, Vision, Skills, FindMe} from '../design/PortStyle'


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
            <div className = "carosel">Sample Carousel coming soon</div>
        </Samples>

        <Vision>
            <img src="https://images.unsplash.com/photo-1523289217630-0dd16184af8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" className="visionImg" alt=""/>

            <section className="vision">
                <div className="visLeft">
                    <i class="fas fa-bullseye"></i>
                    <div className='visRight'>
                        <h2 className= "visTitle">My goals for the future in Web Development</h2>
                        <p className = "visDesc">It is my belief that when women and tech collide, anything is possible. Web Development can save lives. It saved mine. <em><a href="https://blog.hertimetocode.com/how-coding-saved-my-life/">Check out my blog post "Coding Saved My Life."</a></em></p>
                        
                        <p>My passion is creating applications that change lives in practicle and amazing ways.</p>
                    </div>
                </div>
              
           
                
                <section className="goalsList">
                        <p className= "visGoals">Goals</p>
                        <div className="goal leave">
                        <i class="fas fa-graduation-cap"></i>
                        <p className="goalDesc">
                            I am currently building a homeschool app that gamifies educational challenges that allow students to have so much fun that they forget they are learning.
                        </p>
                        </div>
                    

                    <div className="goal stay">
                        <icon></icon>
                        <p></p>
                    </div>

                    <div className="goal leave">
                        <i class="fas fa-female"></i>
                        <div className ="leaveDesc">
                        <p className="goalDesc"> I am building an app to help women leave abusive relationships and to give them marketable skills to be financially secure once they do.</p>
                        <br></br>
                        <p className="goalDesc"> This is such a large undertaking that it requires a full team of developers. </p>
                        </div>
                    </div>
                    
                </section>
            </section>
        </Vision>

        <Skills>
            <div className ="skillsDesc">
                <div className="monSkills">
                    <img src={monkey} className="monkey" alt="monkey icon from Wizard of Oz flying monkeys"/>
                    <h2>I've got stills</h2>
                    </div>
                <p><em>and I'm not afraid to use them.</em></p>
               
            </div>

            <div className = "skillsBar">
                <img src={skillsBG} className="skillsImg" alt="" />
                <div className="lists">
                    <ul className = " list listOne">
                        <li>HTML/CSS</li>
                        <li>Sass</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Node</li>
                    </ul>
                    <ul className = "list listTwo">
                        <li>Express</li>
                        <li>RestAPI</li>
                        <li>Python</li>
                        <li>PhotoShop</li>
                        <li>BootStrap</li>
                        <li>SemanticUI</li>
                    </ul>
                    <ul className = "list listTwo">
                        <li>Postman</li>
                        <li>Postgres</li>
                        <li>SQLite</li>
                        <li>Git</li>
                        <li>Trello</li>
                        <li>Slack</li>
                    </ul>
                </div>
            </div>

        </Skills>

        <FindMe>
            <h2>You can find me here ... </h2>
            <div className="icon-links">
                <div>
                <a href = "https://github.com/Katrina-Dierking">
                    <img src="https://hertimetocode.com/wp-content/uploads/2021/04/github-space1.png" 
                        alt="github icon" 
                        className = "icon"
                    />
                </a>
                </div>

                <div>
                <a href = "https://www.linkedin.com/in/kalynn-dier/">
                    <img src="https://hertimetocode.com/wp-content/uploads/2021/04/linkedin-space2.png" 
                        alt="linkedIn icon"
                        className = "icon"
                        />
                </a>
                </div>

                <div>
                <a href = "mailto:katrina@hertimetocode.com">
                    <img src="https://hertimetocode.com/wp-content/uploads/2021/04/email-space3.png" 
                        alt="email icon"
                        className = "icon"
                        />
                </a>
                </div>
            </div>

        </FindMe>
        </Port>

        <Footer/>

        </>
    )
}

export default Portfolio1
