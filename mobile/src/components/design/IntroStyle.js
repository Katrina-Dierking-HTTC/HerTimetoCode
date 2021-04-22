import styled from 'styled-components'
import {size} from '../design/MediaQueries'

export const IntroWrapper = styled.div`
    max-width: 100vw;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
`

export const HeroWrapper = styled.div`
    display:flex;
    width: 100vw;
    height: 25vh;

    

            @media (min-width: ${size.small}) and (max-width: ${size.med}) {
                    margin-top:5% 
                    width: 70vw;
                    height: 20vh;
                    margin-left:5vw; 
                    padding-top:2vh; 
            }

            @media (min-width: ${size.large}) {
               height: 50vh; 
            }

    .hero {
       width: 70vw;
        opacity: 0.2;
        margin-left: 20vw;

        @media (min-width: ${size.small}) and (max-width: ${size.med}) {
            margin-top:2%   
            width: 50vw;
            height: 20vh;
            
        }

        @media (min-width: ${size.large})and (max-width: ${size.xl}) {
            width: 50vw;
            height: 30vh;
            z-index: 999999;
            margin-left: 35vw;

        }

        @media (min-width: ${size.xxl}) and (max-width: ${size.xxxl}) {
            width: 60vw;
            margin-left: 40vw;
        }
    
       
    }

    .top {
        margin-left: -60vw;
        width: 60vw;
        height: 10vh;

        @media (min-width: ${size.small}) and (max-width: ${size.med}) {
            width: 25vwvw;
            height: 15vh; 
        }

        @media (min-width: ${size.large}) and (max-width: ${size.xl}) {
            width: 50vw;
            height:20vh;
            z-index: 999999;
            padding-top:2%;
            margin-left: -50vw;
        }

        @media (min-width: ${size.xxl}) and (max-width: ${size.xxxl}) {
           width: 60vw;
           height:30vh;
           margin-left: -70vw;
           margin-top: 2%;
        }
    }
`

export const Intro = styled.div`
        display:flex;
        flex-direction:column;
        min-width: 80vw;
       
        margin-top: -18vh;

            @media (min-width: ${size.small}) and (max-width: ${size.med}) {
                margin-top: -14vh;
            }

            @media (min-width: ${size.large}) {
                max-width: 80vw;
                margin-top:-40vh;

            }

        .intro-pix {
            display:flex;
            margin-top: 3vh;

            @media(min-width: ${size.small}) and (max-width: ${size.med}) {
            
            }
        }
            .me {
               width: 35vw;
                margin-left: 2vw;
               

                @media (min-width: ${size.small}) and (max-width: ${size.med}) {
                    width:20vw;
                    margin-left: 5vw;
                    margin-top:2vh;

                }
        
                @media (min-width: ${size.large}) {
                    width: 30vw;
                    height: 30vh;
                    margin-left: 5vw;
                    margin-top: -5%;
                }

                @media (min-width: ${size.xxl}) and (max-width: ${size.xxxl}) {
                width: 25vw;
                height: 40vh;
                margin-top:2%;
                }
            }

            .name2 {
                width: 35vw;
                height: 15vh;
                
                @media (min-width: ${size.small}) and (max-width: ${size.med}) {
                    margin-top: 4vh;
                }
        
                @media (min-width: ${size.large}) and (max-weidth: ${size.xl}) {
                    width: 20vw;
                    margin-top: 8vh;
                }

                @media (min-width: ${size.xxl}) and (max-width: ${size.xxxl}) {
                    width: 15vw;
                    margin-top: 15vh;
                }
            }

            .home-intro {
                width: 100vw;
                padding: 0 0 0 4vw;
                background-color:lightgrey;
                font-size: 1rem;
        
                    @media (min-width: ${size.small}) and (max-width: ${size.med}) {
                        font-size:1.4rem;
                        padding:1vw 1vw 1vw 5vw;
        
                    }
                
                    @media (min-width: ${size.large}) and (max-width: ${size.xl}) {
                        width: 100vw;
                        font-size:1.6rem;
                        padding: 2vw 2vw 2vw 10vw;
                        margin-top:-.2vh;
                    }

                    @media (min-width: ${size.xxl}) and (max-width: ${size.xxxl}) {
                        padding: 3vw 3vw 3vw 8vw;
                        font-size: 2rem;
                        margin-top:-3vh;
                    }

    `

