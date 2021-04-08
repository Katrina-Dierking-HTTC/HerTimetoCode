import React from 'react'
import styled from 'styled-components'
import {Divider, Grid, Segment, Link} from 'semantic-ui-react'


function Portfolio() {
    return (
      
        <PortfolioContainer>
            <PortfolioHeader>
                <h2>Katrina Dierking | PORT</h2>
                <ul className = "port-lins">
                    <a href="#">LinkedIn</a>
                    <a href="#">GitHub</a>
                    <a href="#">Email</a>
                    <a href="#">Contact</a>
                </ul>
            </PortfolioHeader>

            <h3 className="about-me">About Me</h3>
            <PortIntro>
                <div className = "top-about">
                    <div className="about-me-img">asdfa</div>
                    <div className="animated-description">adfa</div>
                </div>

                <div className = "bottom-about">
                    <h3 className = "personal">hkjfd;akdjfas</h3>
                </div>
            </PortIntro>

            <h3 className="projects-title">Projects</h3>
            <Segment>
                <PortProjects>
                <Grid columns={2} relaxed='very'>
                <Grid.Column>
                <section className = "top-projects">
                    <div className = "project">dajhgkghkjhgkhgjhgjhfasd</div>
                    <div className = "project">adfad</div>
                    <div className = "project">adfadsf</div>
                </section>
                </Grid.Column>
                 <Grid.Column>
                <section className = "bottom-projects">
                    <div className = "project">dafda</div>
                    <div className = "project">adfadf</div>
                    <div className = "project">adfadfad</div>
                </section>
                </Grid.Column>
                </Grid>
                <Divider vertical>And</Divider>
            </PortProjects>
            </Segment>
            

            <h3 className = "skills-title">Skills</h3>
            <Skills>
                <div className = "html-css">adfad</div>
                <div className = "styled-components">adsfasdf</div>
                <div className = "javascript">adfad</div>
                <div className = "react">adsfasdf</div>
                <div className = "redux">asdfa</div>
                <div className = "node">adsfasdf</div>
                <div className = "python">afdad</div>
            </Skills>

            <h3 className = "next-title">What's Next</h3>
            <WhatsNext>
                <div className = "future-project-descriptions">akdjfas</div>
                <div className = "future-project-descriptions">asdfa</div>
                <div className = "future-project-descriptions">adfad</div>
            </WhatsNext>

            <h3 className = "footer-title">Footer</h3>
            <FooterPort>
                <div className = "footer-links">
                    <ul>
                        <a href = "#">adf</a>
                        <a href = "#">dadf</a>
                        <a href = "#">adfa</a>
                        <a href = "#">adfa</a>
                    </ul>

                    <ul className = "social">
                        <a href = "#">adaf</a>
                        <a href = "#">adfaf</a>
                        <a href = "#">adfaf</a>
                        <a href = "#">adfaf</a>
                    </ul>
                </div>
            </FooterPort>
        </PortfolioContainer>
      
    )
}

export default Portfolio

const PortfolioContainer = styled.section `
    width: 80vw;
    height: 100vh;
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-contents: space-evenly;
    margin-bottom: 5%;

    .about-me, .projects-title, .skills-title, .next-title, .footer-title {
        background-color: slategrey;
        padding: 2%;
    }
`
const PortfolioHeader = styled.section `
    border: 1px solid white;
    display: flex; 
    flex-direction: column; 
    background-color: lightgrey; 
    padding: 3%;

    
    ul {
        flex-direction: row; 
        align-contents: space-evenly; 
    }

    a {
        padding: 1%;
        border: 1px solid black;
        margin: 2%;
    }
`
const PortIntro = styled.section `
    border: 1px solid  #e21979;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1%;

    .top-about {
        width: 48%;
        height: 10vh;
        background-color: #e21979;
        padding: 1%;
    }
    .bottom-about {
        width: 48%;
        height: 10vh; 
        background-color:  #e21979;
        padding: 1%;
    }
`
const PortProjects = styled.section `

    display:flex;
    flex-direction: column; 

    .top-projects, .bottom-projects {
        display:flex; 
        flex-direction: row; 
        justify-content: space-around; 
        padding: 1%;
        border: 1px solid black; 
        width: 100%;
        background-color: lightgrey; 
    }
        .project {
            padding: 2%;
            // margin: 1%;
            border: 1px solid white; 
            width: 30%;
            background-color: white;
    }
}
`
const Skills = styled.section `
    border: 1px solid teal;
    margin-top: 1%;
    display:flex; 
    flex-direction: row; 
    justify-content: space-around; 
    padding: 1%;

    div {
        border: 1px solid black;
        padding: .5%;
    }
`
const WhatsNext = styled.section `
    border: 1px solid  #e21979;
    margin-top: 1%;
    display:flex; 
    flex-direction: row; 
    justify-content: space-around; 
    padding: 1%;

    div {
        border: 1px solid black;
        padding: .5px;
    }
`

const FooterPort = styled.section`
    // border: .02px solid blue;

   .footer-links {
        display:flex; 
        justify-content: space-evenly;

        a {
            display:flex;
            flex-direction: column;
        }
    }

`