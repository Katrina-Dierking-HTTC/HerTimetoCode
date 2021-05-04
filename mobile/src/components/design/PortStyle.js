import styled from 'styled-components'
import {size} from './MediaQueries'

    const mixin = `
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
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
   height: 30vh;
   margin-top:3%;

   .hero-image {
       height:30vh;
   }

   .hero-container {
       display:flex;
       flex-direction:column;
       justify-content:space-between;
       align-items:center;
       padding:1.5%;
       height: 25vh;

       .hero-name{
        font-family:Amarithe;
        font-size: 3rem; 
       }

       .hero-title {
           font-size: 1rem;
       }
   }
`

export const Port = styled.div`
    ${mixin}
`

export const Options = styled.div`

    width: 100vw;
    height: 90vh;
    margin: 3vh;
    background-color:#f7f7f7;
    ${flexMixin}

    @media(min-width:${size.smMed}) and (max-width: ${size.med}){
        height: 47vw; 
    }
    
    @media(min-width:${size.large}) and (max-width: ${size.xl}){
        flex-direction:row;
        justify-content:space-around;
        height: 20vh;
    }

    @media(min-width: ${size.xxl}) {
        flex-direction:row;
        justify-content:space-around;
        height:30vh;
    }

    .option {
        background-color: #f7f7f7;
        width: 85vw;
        height: 50vh;
        margin:2% 1% 2% 1%;
        padding: 1%;
        background-color:white;
        ${flexMixin}
        box-shadow: 1px .5px 10px 1px black;
        border-radius: 5%;


        @media(min-width:${size.large}) and (max-width: ${size.xl}){
            width: 28vw;
            height: 15vh;
        }
        @media(min-width: ${size.xxl}) {
            flex-direction:row;
            justify-content:space-around;
            height:25vh;
            width: 20vw;
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

    .fa-cogs, .fa-pencil-alt, .fa-address-card{
        height: 4vw;
        width: 4vw;
    }
    .fa-cogs{
        color:#e21979;
    }

    .fa-address-card{
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
    margin:1%;


    @media(max-width:${size.smMed}) {
        display:none;
    }

    @media(min-width:${size.medSm}) and (max-width: ${size.xl}){
        display:flex;
        width: 85vw;
        height: 40vh;
    }

    @media(min-width: ${size.xxl}) {
        flex-direction:row;
        height:50vh;
    }

    .visionImg{
        border: 1px solid grey;
        width: 40vw;

        @media(min-width:${size.large})  and (max-width: ${size.xl}){
            height: 35vh;
            width: 25vw;
            margin-top:2%;
            box-shadow: 1px .5px 10px 1px grey;
        }

        @media(min-width: ${size.xxl}) {
            width: 15vw;
            height: 45vh;
            margin-top: 1%;
        }

    }

    

    .vision{
        width:40vw;
        height: 20vh;
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
        height: 15vh;
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

    width: 90vw;
    height: 20vh;



        .lists {
            display:flex;
            justify-content: space-between;
            width: 85vw;
            height: 10vh;


            @media(min-width:${size.large}) and (max-width:${size.xl}){
                width: 80vw;
            }

        }

        .listOne, .listTwo {
            border:1px solid black;
            width: 25vw;
            height: 15vh;
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

        .icon {
            width: 10vw;
            height: 10vh;
        }

        @media(min-width: ${size.xxl}) {
            width: 15vw;
            height:15vh;
        }
    }
`