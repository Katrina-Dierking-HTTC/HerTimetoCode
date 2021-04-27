import styled from 'styled-components'
import {size} from './MediaQueries'

export const BodyWrap = styled.section`
max-width: 100vw;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;

@media (min-width: ${size.xl}){
    width: 50vw;
    margin-left: 20vw;
}
`

export const ContactWrap = styled.div`
border: 1px solid black;
padding: 3%;
max-width: 30vw;


@media (min-width: ${size.xl}){
    width: 15vw;
    margin-bottom:5vh;
    margin-left: 5vw;
}
`

export const IconWrap = styled.div`
width: 80vw;
height: 10vh;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-around;

@media (min-width: ${size.xl}){
    width: 40vw;
    
}



.icon {
    width: 20vw;
    height: 20vh;

    @media (min-width: ${size.xl}){
        width: 5vw;
    }
}
`