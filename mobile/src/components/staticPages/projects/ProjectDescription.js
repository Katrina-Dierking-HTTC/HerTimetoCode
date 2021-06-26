import React from 'react'
import { ProjectDescWrapper } from './ProjectDesign'

export default function ProjectDescription({title, img, desc, details, code, docs}) {
    return (
        <ProjectDescWrapper>
            <h3 className="title">{title}</h3>
            <img src={img} className="proImg" alt="project visual"/>
            <br></br>
            <div className = "descBx">
                <div className="descOne">
                    <h3 className="descHeadings">DESCRIPTION: </h3>
                    <p className="desc">{desc}</p>
                </div>

                <h3>DETAILS: </h3>
                <p className="details"> {details}</p>

                <div className="descOne">
                    <h3> CODE: </h3>
                    <a href="{code}">{code}</a>
                </div>

               
                <h3>DOCS:</h3>
                <a href = {docs}>{docs}</a>
               
                
            </div>
        </ProjectDescWrapper>
    )
}

