import styled from 'styled-components'
import {size} from './MediaQueries'

    const mixin = `
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    width: 100vw;
    margin:1%;
    `

    const flexMixin= `
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
    `

    const spaceAround= `
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
    `

export const Header = styled.div`
   border: 1px solid orange;
`

export const Port = styled.div`
    // display:flex;
    // flex-direction:column;
    // justify-content:space-between;
    // align-items:center;
    // width: 100vw;
    // margin:1%;
    ${mixin}
`

export const Options = styled.div`

    width: 100vw;
    height: 60vh;
    margin: 3vh;
    background-color:#f7f7f7;
    // display:flex;
    // flex-direction:column;
    // justify-content:space-between;
    // align-items:center;
    ${flexMixin}

    @media(min-width:${size.large}) and (max-width: ${size.xl}){
        flex-direction:row;
        height: 40vw; 
    }
    
    @media(min-width:${size.xxl}) {
        flex-direction:row;
        justify-content:space-around;
        height: 30vh;
    }

    .option {
        background-color: #f7f7f7;
        width: 85vw;
        height: 20vh;
        margin:2% 1% 2% 1%;
        background-color:white;
        // display:flex;
        // flex-direction:column;
        // justify-content:space-evenly;
        // align-items:center;
        ${flexMixin}
        box-shadow: 1px .5px 10px 1px black;
        border-radius: 5%;

        @media(min-width:${size.xl}){
            width: 20vw;
            height: 25vh;
        }

        
        .proDesc{
            width: 70vw;
            font-size:.8rem;


            @media(min-width:${size.large}) and (max-width:${size.xl}) {
            width: 25vw;
            font-size:1rem;
            }

            @media(min-width:${size.xxl}){
                width: 15vw;
                font-size:1rem;
            }
        }

        .optTitle {
            font-weight: 700;
            color:teal;
        }
    }

    .fa-cogs, .fa-pencil-alt, .fa-smile-wink{
        height: 2vw;
        width: 2vw;
    }
    .fa-cogs{
        color:#e21979;
    }

    .fa-smile-wink {
        color:#17c426
    }

    .fa-pencil-alt {
        color:teal;
    }
`
export const Samples = styled.div`
    border: 1px solid red;
    width: 90vw;
    height: 20vh;
    margin:1% 1% 3vh 1%;
`
export const Vision = styled.div`
    display:flex;
    justify-content:space-around;
    width: 70vw;
    margin:1% 1% 3vh 1%;

    @media(max-width:${size.smMed}) {
        display:none;
    }

    @media(min-width:${size.medSm}){
        display:flex;
        width: 85vw;
        height: 70vh;
      
    }

    .visionImg{
        border: 1px solid grey;
        width: 40vw;

        @media(min-width:${size.xxl}) {
            height: 60vh;
            width: 25vw;
            box-shadow: 1px .5px 10px 1px grey;
        }
    }

    

    .vision{
        width:40vw;
        height: 40vh;
        padding-top: 1vh;
    }

    .fa-bullseye, .fa-female, .fa-graduation-cap {
        width:3vw;
        height: 3vh;
        padding-right: 3%;
    } 

    .goalsList {
        border: 1px solid lightgrey;
        padding: 1.5%;
        margin-top:2%;
    }

    .visLeft{
        display:flex;
        padding:3%;
        background-color:lightgrey;
    }

    .visRight {
        height: 28vh;
        display:flex;
        flex-direction:column;
        justify-content: space-between;
    }

    .visTitle {
        font-weight: 700;
    }

    .goal {
        display:flex;
        padding: 1%;
    }

    .leave {
        background-color: #f7f7f7;
    }
`
export const Skills = styled.div`

    // display:flex;
    // flex-direction:column;
    // justify-content:space-around;
    // align-items:center;

    ${spaceAround}
    width: 100vw;
    height: 40vh;
    margin:2vh 1vh 5vh 1vh;

    .monkey{
        width:7vw;
        height:5vh;

        @media (min-width:${size.xl}){
            width: 5vw;
        }
    }
    .monSkills {
        display:flex;
        justify-content:space-around;
        width: 17vw;
        align-items:center;
        margin: 2% 0 2% 0;

    }

    .skillsDesc {
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
        align-items:left;
        width: 80vw;
        height: 15vh;
    }

    .skillsBar {
        position:relative;
        // text-align:center;
    
        .lists {
            display:flex;
            justify-content:space-between;
            width: 75vw;

            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
       
        }

        .skillsImg{
            height: 30vh;
            padding: 3% 0 0 0%;
            opacity: 0.7;
        }

        .listOne, .listTwo {
            border:1px solid black;
            width: 35vw;
            height: 21vh;
            padding: 2vh;
            background-color: #f7f7f7;
            opacity: 0.5;
        }
    }
`
export const FindMe = styled.div`
  
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    width: 75vw;
    height: 20vh;

    .icon-links {
        display:flex;
       flex-direction:row;
       align-items:center;
        width: 30vw;
        border: 1px solid red;

        .icon {
            width: 10vw;
            height: 10vh;
        }
    }
`