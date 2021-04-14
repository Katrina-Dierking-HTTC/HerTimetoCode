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
                    <div className = "top">
                        <img src = "https://hertimetocode.com/wp-content/uploads/2021/04/me2WP.png" alt="Katrina Dierking | Founder of Her Time to Code | Web Developer">
                        </img>
                        <p className = "about-me who-I-am">

                        </p>
                    </div>

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
                            <p className="para"> I have 4 great kids. Three adult children and an amazing 8-yr-old. And while parents aren't supposed to have favorites, the 8-yr-old is clearly in the #1 spot -- at least until she hits the teen years.</p>
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
                            <li>Homeschooling app to gamify education while improving educational standards -- students won't even be aware their learning</li>
                            <li>Eventual Her Time to Code Agency giving new web developers hands-on experience</li>
                            <li>Becoming part of an amazing team as a web developer looking to make a difference for women in tech</li>
                        </ul>   
                </Goals>

                <Projects>
                    <div className = "top">
                        <img src="https://hertimetocode.com/wp-content/uploads/2021/04/project-management-e1618374920289.png"/>
                        <h3> A few of the projects I have completed <em>(and a few more I'm working on)</em>: </h3>
                    </div>

                    <Cards>
                    <div className = "proj-card">
                        <h4 className = "proj-title">Shh... They're learning</h4>
                        <img src></img>
                        <p className="proj-desc"></p>
                        <h5 className="proj-code">Check out the code here</h5>
                    </div>
                    <div className = "proj-card">
                        <h4 className = "proj-title">Shh... They're learning</h4>
                        <img src></img>
                        <p className="proj-desc"></p>
                        <h5 className="proj-code">Check out the code here</h5>
                    </div>
                    <div className = "proj-card">
                        <h4 className = "proj-title">Shh... They're learning</h4>
                        <img src></img>
                        <p className="proj-desc"></p>
                        <h5 className="proj-code">Check out the code here</h5>
                    </div>
                    <div className = "proj-card">
                        <h4 className = "proj-title">Shh... They're learning</h4>
                        <img src></img>
                        <p className="proj-desc"></p>
                        <h5 className="proj-code">Check out the code here</h5>
                    </div>
                    </Cards>
                </Projects>
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
    width: 100vw;
    margin:2% 4%;
`

const Me = styled.div`

      .middle {
        background: #ececec;
        width: 80vw;
        padding: 2%;
        height: 100vh;

        .pets-icon {
            max-width: 50px;
        }

        .pets-p {
            margin-left: 8%;
        }

        .facts-box {
            border-left: 1px solid #e21979;
            display:flex;
            max-width: 30vw;
            margin-left: 1%;
            padding-left: 3%;
        }

        .kids {
            max-width: 95vw;
        }

        .kids-icon {
            padding: .4%;
        }

        .fb2 {
            max-width: 85vw;
        }

        .para {
            padding-left: 2%;
        }

      }

      .pets {
          border:.5px solid grey;
          margin-left: 5%;
          padding: 2%;
          max-width: 40vw;
          margin:2% 0 0 15%;

          display:flex;
          flex-direction:row;
          flex-wrap:wrap;
          justify-content:space-between;
      }
      .pets-box{
        box-shadow: 4px .5px 12px 2px slategrey;
        width: 15vw;
        padding: 1%;
        margin: 2%;
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

    .top {
        display:flex;
        width: 85vw;
        padding-top:2%;
    }
    
`
const Projects = styled.div`
    padding-left: 5%;
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    justify-content:space-between;

    .top {
        display:flex;
        width: 85vw;
        padding-top:2%;
    }

`

const Cards = styled.div`
    display:flex;
    justify-content: space-between;
    width: 65vw;

    .proj-card {
        min-width:15vw;
        height: 40vh;
        border: 1px solid black;
        margin-top: 3%;
    }

    .proj-title {
        max-height: 2vh;
        background-color: #ececec;
        margin-top: 0%;
        padding:2% 0 4% 4%;
        border: 2px solid black;
    }
`