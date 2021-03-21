import React from 'react'
import styled from 'styled-components'


function Portfolio() {
    return (
        <div>
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
                    <div className="about-me-img"></div>
                    <div className="animated-description"></div>
                </div>

                <div className = "bottom-about">
                    <h3 className = "personal"></h3>
                </div>
            </PortIntro>

            <PortProjects>
                <section className = "top-projects">
                    <div className = "project"></div>
                    <div className = "project"></div>
                    <div className = "project"></div>
                </section>

                <section className = "bottom-projects">
                    <div className = "project"></div>
                    <div className = "project"></div>
                    <div className = "project"></div>
                </section>
            </PortProjects>

            <Skills>
                <div className = "html-css"></div>
                <div className = "styled-components"></div>
                <div className = "javascript"></div>
                <div className = "react"></div>
                <div className = "redux"></div>
                <div className = "node"></div>
                <div className = "python"></div>
            </Skills>

            <WhatsNext>
                <div className = "future-project-descriptions"></div>
                <div className = "future-project-descriptions"></div>
                <div className = "future-project-descriptions"></div>
            </WhatsNext>
        </div>
    )
}

export default Portfolio

const PortfolioHeader = styled.section ``
const PortIntro = styled.section ``
const PortProjects = styled.section ``
const Skills = styled.section ``
const WhatsNext = styled.section ``