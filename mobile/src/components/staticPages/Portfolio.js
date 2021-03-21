import React from 'react'
import styled from 'styled-components'


function Portfolio() {
    return (
        <PortfolioContainer>
            <PortfolioHeader>
                <h3>Katrina Dierking | Portfolio</h3>
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
                    <div className = "project">dafasd</div>
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
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-contents: space-evenly;
`
const PortfolioHeader = styled.section `
    border: 1px solid white;
`
const PortIntro = styled.section `
    border: 1px solid red;
`
const PortProjects = styled.section `
    border: 1px solid blue;
`
const Skills = styled.section `
    border: 1px solid green;
`
const WhatsNext = styled.section `
    border: 1px solid yellow;
`