import styled from 'styled-components'
import {size} from './MediaQueries'

// @mixin .style {
//     display:flex;
//     flex-direction:column;
//     justify-content:space-between;
//     align-items:center;
//     width: 100vw;
//     margin:1%;
// }
export const Header = styled.div`
   border: 1px solid orange;
`

export const Port = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    width: 100vw;
    margin:1%;
`

export const Options = styled.div`

    width: 100vw;
    height: 60vh;
    margin: 3vh;
    background-color:#f7f7f7;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;

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
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
        align-items:center;
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
    border: 1px solid blue;
    display:flex;
    justify-content:space-around;
    width: 90vw;
    argin:1% 1% 3vh 1%;

    @media(max-width:${size.smMed}) {
        display:none;
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
        background-color:pink;
        width:40vw;
        height: 40vh;
        padding-top: 1vh;
    }

    .fa-bullseye {
        width:3vw;
        height: 3vh;
    } 
`
export const Skills = styled.div`
    border: 1px solid green;
    display:flex;
    flex-direction:column;
    width: 85vw;
    margin:2vh 1vh 3vh 1vh;

    .skillsBox {
        display:flex;
        flex-direction:column;
    }

    .lists {
        display:flex;
        justify-content:space-evenly;
        width: 80vw;
    }

    .listOne, .listTwo {
        border:1px solid black;
        width: 35vw;
        padding-bottom: 2vh;
    }
`
export const FindMe = styled.div`
    border: 1px solid black;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    width: 75vw;
    height: 20vh;

    .icon-links {
        width: 50vw;
        border: 1px solid red;
    }
`