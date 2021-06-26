import React from 'react'
import ProjectDescription from './ProjectDescription'
import { ProCardWrapper} from './ProjectDesign'

export default function ProjectCard({props}) {
    return (
        <ProCardWrapper>
            <ProjectDescription
                title={props.title}
                img={props.img}
                desc={props.desc}
                details={props.details}
                code={props.code}
                docs={props.docs}
            />
        </ProCardWrapper>
    )
}
