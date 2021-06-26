import React, {useState} from 'react'
import { projectData } from './projectData'
import ProjectCard from './ProjectCard'
import FooterNav from '../../main/FooterNav'
import { ProPage, ProjectBody, ProWrapper } from './ProjectDesign';

export default function Projects() {
    const [data] =useState(projectData);

    return (
        <>
        <ProPage>
            <h2 className="proTitles">PROJECTS: </h2>
            <ProjectBody>
                <hr></hr>
                <ProWrapper>
                    {data.map((project, index) => (
                        <ProjectCard props={project} key={index} />
                    ))}
                </ProWrapper>
            </ProjectBody>
        </ProPage>
        <FooterNav /> 
        </>
    );
};

