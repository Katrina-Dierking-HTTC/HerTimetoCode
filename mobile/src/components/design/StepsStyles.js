import styled from 'styled-components'
import {size} from '../design/MediaQueries'

export const StepWrapper = styled.div`
    display:flex;
    width: 100vw;
    margin-top:2vw;

    img {
        margin-left: 4vw;
        width: 50vw;
        height: 30vh;

        @media (min-width: ${size.small}) and (max-width: ${size.med}) {
            width: 40vw;
            height: 23vh;
        }
        
        @media (min-width: ${size.large}) and (max-width: ${size.xl}) {
            width: 30vw;
            height: 20vh;
        }

        @media (min-width: ${size.xxl}) and (max-width: ${size.xxxl}) {
            width: 15vw;
            height: 30vh;
            margin-left: 20vw;
        }

    }
    .steps{
        width: 40vw;
        padding: 2%;
        margin-left: -1vw;
        margin-top:1vh;

    }

    .step-box {
       border: 1px solid teal;
       padding: 1% 2% 0 2%;
       width: 43vw;
        

        @media (min-width: ${size.small}) and (max-width: ${size.med}) {
            padding: 3%;
        }
        
        @media (min-width: ${size.large}) and (max-width: ${size.xl}){
            width: 50vw;
            padding: 5%;
        }

        @media (min-width: ${size.xxl}) and (max-width: ${size.xxxl}) {
            width: 30vw;
            padding: 3%;
        }
    }

    .a{
        margin-top:-1vh;
       
        @media (min-width: ${size.xxl}) and (max-width: ${size.xxxl}) {
           margin-top: -3vh;
        }
    }

`
