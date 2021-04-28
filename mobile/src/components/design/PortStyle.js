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
    border: 1px solid black;
    width: 80vw;
    height: 60vh;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;

    .option {
        background-color: #f7f7f7;
        width: 60vw;
        height: 20vh;
        margin:1%;
        border: 1px solid red;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;

    }
`
export const Samples = styled.div`
    border: 1px solid red;
    width: 90vw;
    height: 20vh;
    margin:1%;
`
export const Vision = styled.div`
    border: 1px solid blue;
    display:flex;
    justify-content:space-between;
    width: 90vw;
    margin:1%;

    .visionImg{
        border: 1px solid grey;
        width: 40vw;
    }

    .vision{
        background-color:pink;
        width:40vw;
        height: 40vh;
    }
`
export const Skills = styled.div`
    border: 1px solid green;
    display:flex;
    flex-direction:column;
    width: 85vw;
    margin:1% 2% 1% 2%;

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