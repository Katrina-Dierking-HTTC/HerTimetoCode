import React from 'react'
import Top from '../../main/Top'
import Footer from '../../shop/footer/Footer'
import { Link} from 'react-router-dom'
import {Social, TopSection, Me, About, Skills, FindMe} from '../../design/PortfolioStyle'

import './portfolioStyles.scss'


function Portfolio() {
    return (
        <>
        <Top/>
     

        <section className="hero-section">
            <section className="hero is-info is-large hero-image">
                <div className="hero-box">
                    <div className="hero-container">
                        <h5 className="hero-title">Welcome to the Portfolio of</h5>
                        <h1 className = "hero-name">Katrina Dierking</h1>
                        <h5 className="hero-title">Full-Stack Web Developer</h5>
                    </div>
                </div>
            

                <p className="hero-quote mt-4 text-lg text-gray-300">
                        ~ Where women, coffee, and tech collide, 
                        <p>anything is possible ~ </p>
                </p>
            </section>
    
        </section>

        <Me>
       
            <section className="pb-10 bg-gray-300 mt-24">
              
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                          
                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center" data-aos="fade-right" data-aos-delay="1200">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg project-box">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                        
                                            <a href = "https://github.com/Katrina-Dierking" target="_blank"><i className="fas fa-robot"></i></a>
                                        </div>
                                    
                                        <h6 className="text-xl font-semibold"></h6>
                                        <br></br>
                                        <a href = "https://github.com/Katrina-Dierking" target="_blank">
                                            <h6 className="text-xl font-semibold"> Projects</h6>
                                        </a>
                                        <p className="mt-2 mb-2 text-gray-600">
                                            Check out my latest projects -- completed and ongoing.
                                        </p>
                                    </div>
                                </div>
                        </div>
                   
                    <div className="w-full md:w-4/12 px-4 text-center" data-aos="fade-up" data-aos-delay="1400">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                                    {/* Icon */}
                                    <i className="fas fa-atom"></i>
                                </div>
                                {/* Text Box */}
                                <h6 className="text-xl font-semibold">Blog</h6>
                                <p className="mt-2 mb-4 text-gray-600">
                                Follow my journey as I share the path that led me to coding and my continued adventure of becoming a skilled web developer. 
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Card  */}
                    <div className="pt-6 w-full md:w-4/12 px-4 text-center" data-aos="fade-left" data-aos-delay="1500">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                                {/* Icon */}
                                <a href="https://katrina-dierking.netlify.app/about"><i className="fas fa-bolt"></i></a>
                                </div>
                                {/* Text Box  */}
                                <Link to='./about'><h6 className="text-xl font-semibold">About</h6></Link>
                                <p className="mt-2 mb-4 text-gray-600">
                                Find out what makes me laugh, my crazy quirks, and the what keeps me awake at night.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Box and Card Container  */}
                <div className="flex flex-wrap items-center mt-32">
                {/* Text Box Container */}
                    <div className="w-full md:w-12/12 px-4 mr-auto ml-auto"  data-aos="zoom-in-right">
                        {/* Text Box  */}
                        <div className="text-gray-600 p-1 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                            {/* Icon  */}
                            <i className="fas fa-star text-xl"></i>
                        </div>
                        <h3 className="text-3xl mb-2 font-semibold leading-normal">
                        A few samples of my work: 
                        </h3>
                        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                        
                        </p>
                        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                        It is my passion to not only build business-changing applications but to also create life-changing applications.  
                        </p>
                        
                        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                        My greatest passion and goal is to build an app that will help women leave abusive relationships and give them marketable skills to be financially secure once they are on their own. 
                        </p>

                        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                        In the meantime, here are a few samples of my work. Being a Web Developer gives me the ability to help other businesses scale through optimized, branded platforms. 
                        </p>
                
                    </div>

                    <div className="w-full md:w-12/12 px-4 mr-auto ml-auto" data-aos="flip-left" data-aos-delay= "1000">
                        <div className = "screenshot-img">
                        
                        <img
                            alt="screen shots of projects built"
                            src="https://blog.hertimetocode.com/wp-content/uploads/2021/04/portfolio-screen.png"
                            class="w-full align-middle rounded-t-lg fade-in-image"
                        />
                        <blockquote class="relative p-8 mb-4"></blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Me>

        <About>
            
            <section className="relative py-20">
             
            <div className="container mx-auto px-4">
                <div className="items-center flex flex-wrap">
                <div className="w-full md:w-4/12 ml-auto mr-auto px-4" data-aos="flip-right" data-aos-delay= "1000"> 
                    {/* Image  */}
                    <img
                    alt="..."
                    className="max-w-full rounded-lg shadow-lg"
                    src="https://images.unsplash.com/photo-1523289217630-0dd16184af8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    />
                </div>
                {/* Text Box Container */}
                <div className="w-full md:w-6/12 ml-auto mr-auto px-4" data-aos="zoom-in-left">
                    <div className="md:pr-12">
                        <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                            {/* Icon */}
                            <i className="fas fa-rocket text-xl"></i>
                        </div>
                    {/* Text Box */}
                    <h3 className="text-3xl font-semibold">A woman with a vision</h3>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Being home fulltime has been one of the greatest joys of my life. Aside from continuing to strengthen my coding skills, I have a vision of helping other women and young girls break into tech.
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">What I'm working on: </p>
                    {/* List */}
                    <ul className="list-none mt-6">
                        <li className="py-2">
                        <div className="flex items-center">
                            <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                    {/* Icon  */}
                                    <i className="fas fa-fingerprint"></i>
                                </span>
                            </div>
                        <div>
                        <h4 className="text-gray-600">
                                Coffee | Code | Collaborate
                        </h4>
                    </div>
                </div>
                        </li>
                        <li className="py-2">
                        <div className="flex items-center">
                            <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                               {/* Icon  */}
                                <i className="fab fa-html5"></i>
                            </span>
                            </div>
                            <div>
                            <h4 className="text-gray-600">HTTC Learning Tools & Products</h4>
                            </div>
                        </div>
                        </li>
                        <li className="py-2">
                        <div className="flex items-center">
                            <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                               {/* Icon  */}
                                <i className="far fa-paper-plane"></i>
                            </span>
                            </div>
                            <div>
                            <h4 className="text-gray-600">Future HTTC Agency</h4>
                            </div>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </About>

        <Skills>
      
            <div className="skills-container mx-auto px-4">
           
                
                <div className="flex flex-wrap">
                    <div className = "skills-wrap">
                        <br></br>
                        <h4 className="text-3xl font-semibold">I've got skills </h4>
                        <h5 className="text-lg mt-0 mb-2 text-gray-700">
                            ... and I'm adding to them daily!
                        </h5>

                        
                        <div className="mt-6">
                            <img src = "https://hertimetocode.com/wp-content/uploads/2021/04/skills.png" />
                    
                        </div>
                    </div>
                </div>
            </div>
        </Skills>
        


        <FindMe>
                <div className="findme-box">
               
                
                    <h4 class="text-3xl font-semibold">You can find me here </h4>
                    <br></br>
                    
                        <div className = "findme-links">
                    
                            
                                <a href = "https://github.com/Katrina-Dierking"><img src="https://hertimetocode.com/wp-content/uploads/2021/04/github-space1.png" /></a>
                                <a href = "https://www.linkedin.com/in/kalynn-dier/"><img src="https://hertimetocode.com/wp-content/uploads/2021/04/linkedin-space2.png" /></a>
                                <a href = "mailto:katrina@hertimetocode.com"><img src="https://hertimetocode.com/wp-content/uploads/2021/04/email-space3.png" /></a>
                                <a href = "https://blog.hertimetocode.com"><img src="https://hertimetocode.com/wp-content/uploads/2021/04/wordpress-space4.png" /></a>
                        </div>
                
                    
              
                </div>
                <br></br>
        </FindMe>



       <Footer />
        </>
    )
}

export default Portfolio
