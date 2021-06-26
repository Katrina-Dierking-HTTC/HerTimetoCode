import React from 'react'


import {Body, ComingWrap, Description, IconDrop, Icon} from '../design/CommunityStyle'

function Community() {
    return (
        <div>
           

            <Body>

            
                <ComingWrap>
                    <h3>Coming soon:</h3>
                    <p>Coffee | Code | Collaborate</p>
                </ComingWrap>

                <Description>
                    <p>
                        While CCC is currently already working on a project, soon we will be doing so on an official capacity.
                    </p>
                    
                    <div className = "desc-box">
                        <h4>What is CCC?</h4> 
                        <p>An all female coding community combining their collective skills and experience to create life-changing applications.
                        </p>
                    </div>

                    <div className = "desc-box">
                        <h4>Our Vision:</h4>
                        <p>To give aspiring and new developers the opportunity to gain experience that can be used for future employment and to give experienced developers the opportunity to mentor those coming behind them. 
                        </p>
                    </div>
                    </Description>

                    <IconDrop>
                    <h4> CCC will include: </h4>
                        <Icon>
                            <i class="fas fa-coffee"></i>
                            <p className = "para a">
                                Bi-weekly meetings to encourage each other, collaborate on ideas, and practice working on multi-level teams.
                            </p>
                        </Icon>
                    

                        <Icon>
                            <i class="fas fa-fingerprint"></i>

                            <p className = "para">
                                Each team member will bring a unique experience. Each will have the opportunity to lead and teach, adding new skills to their resume.
                            </p>
                        </Icon>

                        <Icon>
                            <i class="fas fa-code"></i>
                            <p className="para a">
                                Members will be working on projects that will improve current skills.
                                <br></br>
                                <br></br>
                                The team will deliberately and aggressively introduce new languages and frameworks to develop new skills.
                                <br></br>
                                <br></br>
                                Members will be able to add new projects to their portfolio and use their time on the team as experience for future employment.
                            </p>
                        </Icon>
                    </IconDrop>

                

            </Body>
        </div>
    )
}

export default Community

