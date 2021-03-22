import React from 'react'
import styled from 'styled-components'


function Portfolio() {
    return (
        <PortfolioContainer>
            <PortfolioHeader>
                <h2>Katrina Dierking | Portfolio</h2>
                <ul className = "port-lins">
                    <a href="#">LinkedIn</a>
                    <a href="#">GitHub</a>
                    <a href="#">Email</a>
                    <a href="#">Contact</a>
                </ul>
            </PortfolioHeader>

            <PortIntro>
                <div className = "top-about">
                    <div className="about-me-img">asdfa</div>
                    <div className="animated-description">adfa</div>
                </div>

                <div className = "bottom-about">
                    <h3 className = "personal">hkjfd;akdjfas</h3>
                </div>
            </PortIntro>

            <PortProjects>
                <section className = "top-projects">
                    <div className = "project">dajhgkghkjhgkhgjhgjhfasd</div>
                    <div className = "project">adfad</div>
                    <div className = "project">adfadsf</div>
                </section>

                <section className = "bottom-projects">
                    <div className = "project">dafda</div>
                    <div className = "project">adfadf</div>
                    <div className = "project">adfadfad</div>
                </section>
            </PortProjects>

            <Skills>
                <div className = "html-css">adfad</div>
                <div className = "styled-components">adsfasdf</div>
                <div className = "javascript">adfad</div>
                <div className = "react">adsfasdf</div>
                <div className = "redux">asdfa</div>
                <div className = "node">adsfasdf</div>
                <div className = "python">afdad</div>
            </Skills>

            <WhatsNext>
                <div className = "future-project-descriptions">akdjfas</div>
                <div className = "future-project-descriptions">asdfa</div>
                <div className = "future-project-descriptions">adfad</div>
            </WhatsNext>
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
    border: 1px solid red;
    display:flex;
    flex-direction: row;
    margin-top: 1%;

    .top-about {
        width: 50%;
        height: 10vh;
        background-color: red;
        padding: 1%;
    }
    .bottom-about {
        width: 50%;
        height: 10vh; 
        background-color:blue;
        padding: 1%;
    }
`
const PortProjects = styled.section `
    border: 1px solid blue;
    display:flex;
    flex-direction: column; 
    // align-contents: space-around; 
    margin-top: 1%;

    .top-projects, .bottom-projects {
        display:flex; 
        flex-direction: row; 
        padding: 1%;
        border: 1px solid black; 
        width: 100%;
        background-color: red; 
    }
        .project {
            padding: 2%;
            margin: 1%;
            border: 1px solid white; 
            width: 30%;
            background-color: white;
    }
}
`
const Skills = styled.section `
    border: 1px solid green;
    margin-top: 1%;
`
const WhatsNext = styled.section `
    border: 1px solid yellow;
    margin-top: 1%;
`