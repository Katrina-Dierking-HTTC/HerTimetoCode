import React from 'react'
import Top from '../main/Top'
import FooterNav from '../main/FooterNav'
import styled from 'styled-components'

export default function About () {
    return (
            <>
            <Top />
                <AboutTopWrapContent>
                    <h3 className = "aboutH2Header"> About Katrina Dierking | Her Time to Code</h3>
                </AboutTopWrapContent>
              
            <AboutBody>
                <Me>
                    <div className = "me-top">
                        <img src = "https://hertimetocode.com/wp-content/uploads/2021/04/me2WP.png" alt="Katrina Dierking | Founder of Her Time to Code | Web Developer">
                        </img>
                        <p className = "about-me who-I-am">
                            In a "former life" I was a Surgical Technologist and then a Paramedic/ Firefighter. I left the medical field because I wanted to come home fulltime. I didn't want to miss anymore of my daughter's life. However, there aren't many medical jobs you can do from home so I had to find a new path.
                            <br></br>
                            <br></br>
                            In my BLOG, I share how coding literally saved my life. You can read more about that <em>here</em>.
                            <br></br>
                            <br></br>
                            Before I found coding (or it found me), I taught myself Adobe/ PhotoShop & Illustrator and became very proficient in WordPress -- both frontend and backend. I began freelancing as a web designer as a way to make a living while I searched for my true passion.
                            <br></br>
                            <br></br>
                        </p>
                        </div>
                            <p className = "me-para-bottom"> When I'm not coding, creating new apps, developing new learning tools/products, or working through coding challenges, I'm  gardening, baking, homeschooling my daughter, or working on my latest manuscript.
                            <br></br>
                            <br></br>
                            Like my manuscript and portfolio, my website is a constant work in progress. Though it's <em>finally</em> live, I continually tweek it to refactor code, simplify components, and make a cleaner more optimized code. It is constantly "under construction" so please excuse any mess you may see in my code as I work to improve. I continue to learn. </p>

                    <div className = "middle">
                        <h3 className = "about-me fun-facts">
                            Some fun facts about me:
                        </h3>

                        <div className="facts-box">
                            <img src="https://hertimetocode.com/wp-content/uploads/2021/04/coffee-1-e1618362800208.png"/>
                            <p className="para"> I drink close to 3 pots of coffee every day.</p> 
                        </div>
                            
                            <br></br>

                        <div className="facts-box fb2">
                            <img src="https://hertimetocode.com/wp-content/uploads/2021/04/pet-house-e1618367293820.png" className="pets-icon"/>
                            <p className="para"> Though I claim to not be an animal person, I always have several rescue animals in my home at a time.</p>
                        </div>
                        
                        <br></br>
                           
                        <p className = "pets-p">As of right now, we have: </p>
                        

                        <br></br>
                            
                        <div className="pets">
                            <div className="pets-box a">
                                   
                                <img src="https://hertimetocode.com/wp-content/uploads/2021/04/dog-3-e1618362128796.png"/>
                                <p className="pets-para">Lilly Rose</p>
                            </div>

                            <br></br>

                            <div className="pets-box b">
                                <img src="https://hertimetocode.com/wp-content/uploads/2021/04/egyptian-cat-e1618362214943.png"></img>
                                <p>  Dr. Bravestone</p>
                            </div>
                                
                            <br></br>

                            <div className="pets-box a">
                                <img src = "https://hertimetocode.com/wp-content/uploads/2021/04/dragon-e1618362568758.png"/>
                                <p>(2 Dragons:) Ice and Fire</p> 
                            </div>
                            
                            <br></br>

                            <div className="pets-box b">
                                <img src="https://hertimetocode.com/wp-content/uploads/2021/04/turtle-2-e1618362753337.png"/>
                                <p>
                                Tank the Turtiose</p>
                            </div>

                            <br></br>
                            
                            <div className="pets-box a">
                                <img src="https://hertimetocode.com/wp-content/uploads/2021/04/caterpillar-e1618363150192.png"/>
                                <p>Flash</p>
                            </div>
                               
                            <br></br>
                               
                        </div>
                        <br></br>
                    
                        <div className = "facts-box kids">
                            <img src="https://hertimetocode.com/wp-content/uploads/2021/04/children-e1618369097663.png" className="kids-icon"/>
                            <img src="https://hertimetocode.com/wp-content/uploads/2021/04/children-1-e1618369287757.png" className="kids-icon"/>
                            <p className="para"> I have 4 great kids. Three older children and an amazing 8-yr-old. And while parents aren't supposed to have favorites, the 8-yr-old is clearly in the #1 spot -- at least until she hits the teen years.</p>
                        </div>
                        <br></br>
                        <div className = "facts-box">
                            <img src="https://hertimetocode.com/wp-content/uploads/2021/04/gardening-e1618413855863.png"/>
                            <p className="para"> Gardening is my therapy. I have to see green outside my windows. I grow most of my own food and have several hanging herb gardens inside my home as well. Getting my hands dirty makes me happy.</p>
                        </div>
                        <br></br>
                        <div className = "facts-box">
                            <img src="https://hertimetocode.com/wp-content/uploads/2021/04/mixer-e1618413867209.png"/>
                            <p className="para">I bake fresh bread several times a week. I give loaves to my neighbors and take several loaves to church each Sunday morning. Baking makes me feel productive and gives me a sense of taking care of my family. <em>I also make all of our soap, bath and cleaning products.</em></p>
                        </div>
                        <br></br>
                        <div className = "facts-box">
                            <img src="https://hertimetocode.com/wp-content/uploads/2021/04/blogger-e1618413877763.png"/>
                            <p className="para"> I've written several novels. I've been both traditionally published and self-published. <em>(I prefer self-publication.)</em> I am currently working on my next novel, albeit slow progression, about a young girl who fights her way out of a sex-trafficking ring that has held her captive for several years.</p>
                        </div>
                        <br></br>
                        <div className = "facts-box">
                            <img src="https://hertimetocode.com/wp-content/uploads/2021/04/brain-e1618417481523.png"/>
                            <p className="para"> I love learning. I hold several degrees <em>(in both the medical and business industry)</em> and continue to add to my knowledge and skills. I always joke that I plan to be 95 years old taking a test or writing a paper.</p>
                        </div>
                        
                    </div>
                   

                </Me>

                <Goals>
                <div className = "top">
                    <img src="https://hertimetocode.com/wp-content/uploads/2021/04/success-e1618370002549.png"/>
                    <h3 className = "about-me plans">What I'm working on now & plans for the future: </h3>
                </div>
                   
                        <ul>
                            <li>Coffee | Code | Collaborate <em>(see more in Community)</em></li>
                            <li>Continue developing Her Time to Code learning tools & products</li>
                            <li>Her Time to Code for middle-school & high-school homeschool girls</li>
                            <li>Homeschooling app to gamify education while improving educational standards -- students won't even know they're learning</li>
                            <li>Eventual Her Time to Code Agency giving new web developers hands-on experience</li>
                            <li>Becoming part of an amazing team as a web developer for a company that recognizes the value of women in tech</li>
                        </ul>   

                        <h4> and person goals ...</h4>
                        <ul>
                            <li>Finish my doctorate <em> so my husband has to call me Dr. Katrina</em></li>
                            <li>Buy a BIG piece of land</li>
                            <li>Get back into running</li>
                        </ul>
                </Goals>

                <Projects>
                    <div className = "top">
                        <img src="https://hertimetocode.com/wp-content/uploads/2021/04/project-management-e1618374920289.png"/>
                        <h3> A few of the projects I have completed <em>(and a few more I'm working on)</em>: </h3>
                    </div>

                    <Cards>
                    <div className = "proj-card">
                        <h5 className = "proj-title">Katrina Dierking | Her Time to Code - Portfolio</h5>
                        <img src ="https://hertimetocode.com/wp-content/uploads/2021/04/portfoliomockup.png"></img>
                        <p className="proj-desc"></p>
                        <h5 className="proj-code">Check out the code <a href="https://github.com/Katrina-Dierking-HTTC/portfolio">here</a></h5>
                    </div>
                    <div className = "proj-card">
                        <h4 className = "proj-title">Shh... They're learning</h4>
                        <img src></img>
                        <p className="proj-desc"></p>
                        <h5 className="proj-code">Check out the code here</h5>
                    </div>
                    <div className = "proj-card">
                        <h4 className = "proj-title">Drop and Drag</h4>
                        <img src></img>
                        <p className="proj-desc"></p>
                        <h5 className="proj-code">Check out the code here</h5>
                    </div>
                    <div className = "proj-card">
                        <h4 className = "proj-title">Budget Tracker</h4>
                        <img src></img>
                        <p className="proj-desc"></p>
                        <h5 className="proj-code">Check out the code here</h5>
                    </div>
                    </Cards>
                </Projects>

                <Passions></Passions>
            </AboutBody>

            {/* <FooterNav /> */}

            </>
    )
}

const AboutTopWrapContent = styled.div`
    height: 70px;
    position: relative;
    box-shadow: 5px .5px 8px 3px black;

    .aboutH2Header {
        height: 50px;
        background: teal;
        position: relative;
        border-bottom: 1.5px solid black;
        color:white;
        padding-left: 2%;
        padding-top:2%;
        font-size: 1rem;
        font-weight: 300;
      }
      
`

const AboutBody = styled.div`
    height:100vh;
    width: 90vw;
    margin:2% 4%;
`

const Me = styled.div`
      max-width: 90vw;
      min-height: 100vh;

      .me-top {
        display:flex;
        width: 80vw;
      }

      .me-para-bottom {
          max-width: 80vw;
      }

      .middle {
        background: #ececec;
        width: 80vw;
        padding: 1%;
        min-height: 100vh;

        .pets-icon {
            max-width: 50px;
        }

        .pets-p {
            margin-left: 8%;
        }

        .facts-box {
            border-left: 1px solid #e21979;
            display:flex;
            max-width: 70vw;
            margin-left: 1%;
            padding-left: 3%;
            height: 5vh;
        }


        .fb2 {
            max-width: 85vw;
        }

        .para {
            padding-left: 2%;
        }

        .who-I-am {
            max-width: 80vw;
        }

      }

      .pets {
          border:.5px solid grey;
          margin-left: 5%;
          padding: 1%;
          max-width: 40vw;
          margin:0% 0 0 15%;
          background-color: white;

          display:flex;
          flex-direction:row;
          flex-wrap:wrap;
          justify-content:space-between;
      }
      .pets-box{
        box-shadow: 4px .5px 12px 2px slategrey;
        width: 15vw;
        padding: 1%;
        margin: 1%;
        }

        .a {
            background-color:teal;
        }
        .b {
            background-color: grey;
        }
`
const Goals = styled.div`
    padding-left: 5%;
    max-width: 77vw;
    
    .top {
        display:flex;
        justify-content: space-evenly;
        width: 25vw;
        padding-top:2%;
    }
`
const Projects = styled.div`
    padding-left: 5%;
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    justify-content:space-between;
    background: #ececec;

    .top {
        display:flex;
        width: 45vw;
        padding-top:1%;
    }
`



const Cards = styled.div`
    display:flex;
    flex:wrap;
    min-width: 100vw;

    .proj-card {
        min-width:15vw;
        height: 90vh;
        border: 1px solid black;
        margin: 1% 0 0 1%;
    }

    .proj-title {
        max-height: 2vh;
        background-color: teal;
        margin-top: 0%;
        padding:2% 0 4% 4%;
        border: 2px solid black;
    }

    .proj-code {
        margin-left: 12%;
    }
`
    const Passions = styled.section`
    
    `
