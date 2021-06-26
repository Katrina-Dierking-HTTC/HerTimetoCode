import styled from 'styled-components'
import {size} from './MediaQueries'

export const IntroInvWrap = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    width: 100vw;
`
export const IntroWrap = styled.div`
    height: 28vh;
    display:flex;
    justify-content:center;
    margin-bottom:2%;


    

    .hero-title{
        min-height:20vh;
        min-width: 100vw;

      }

    .hero {
        background-image: url('https://blog.hertimetocode.com/wp-content/uploads/2021/04/BG.png');
        height: 20vh;

        @media(min-width: ${size.xl}){
           height:30vh;
        }
    }
`


export const InviteWrap = styled.div`

    display:flex;
    flex-direction: column;
    justify-content:space-evenly;
    align-items:center;
    background-color: #f7f7f7;
;
    margin-top:1vh;
        @media(min-width: ${size.large}) and ${size.xl} {
            width: 50vw;
        }
    
    .introBox{
        width: 90vw;
        padding: 1vh;

        @media(min-width: ${size.xxl}) {
            width: 70vw;
            height: 20vh;

        }
    }

    .welcome, .AreYou {
        font-size: 1.3rem;
        font-weight:500;
        
        // font-size: 2rem;
    }

    .welcome-desc {
        font-size:.8rem;
        padding-top:.8%;
        
    //     font-size: 1.2rem;
    }

    .AreYou {
        color: #e21979;
        padding-top: 2vh;
    }

    .boxes{
        height: 85vh;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        width: 90vw;
        margin-top:3%;
        
        
        @media (min-width:${size.smMed}) and (max-width:${size.med}){
        height:50vh;
        width: 60vw;
        display:flex;
        justify-content: space-between;
        align-items:center;
        margin-top: 5vh;
        }

        @media(min-width:${size.large}){
            display:flex;
            height:12vh;
            flex-direction:row;
            width:90vw;
        }
    }
    .choice {
        border: 1px solid green;
        border-radius:5%;
        width: 75vw;
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
        
        cursor:pointer;
        
        @media (min-width:${size.smMed}) and (max-width:${size.med}){
        // margin:1%;
        width: 55vw;
        }

        @media(min-width:${size.large}){
        max-width: 27vw;
        }
    }
    .top {

        display:flex;
        flex-direction:row;

        @media(min-width:${size.large}) and (max-width:${size.xl}) {
        justify-content: space-evenly;
        align-items:center;
        }
    }

    .choice-title {
        font-weight: 700;
        color:teal;
    }

    .top-one, .top-two {

        height: 4vh;
        padding:1%;
   
        
        // height: 8vh;
        // padding-bottom: 3vh;
    }

    .top-one {
        width: 10vw;
        // width: 5vw;
    }

    .top-two{
        width: 70vw;
        // width: 20vw;
        // padding-left: 1vw;
    }

    .bottom {
        width: 70vw;
        border: 1px solid lightgrey;
        padding:2%;
        white-space:normal;
        overflow:hidden;
        margin:2%;
        text-align:center;

        @media (min-width:${size.smMed}) and (max-width:${size.med}){
        height: 10vh;
        padding:1vh;
        width: 50vw;
        margin:1.2vw;
        }

        @media(min-width:${size.large}){
            max-width: 25vw;
        }
    }

    .botDesc{
        width: 70vw;
        font-weight: 600;

        @media (min-width:${size.smMed}) and (max-width:${size.med}){
        width: 45vw;
        height: 40vh;
        }

        @media(min-width:${size.large})  {
            max-width: 23vw;
        }
    }

    .one, .two, .three {
        box-shadow: .5px .5px 10px 1px slategrey;
    }
    .one {
        background-image: linear-gradient(to right, rgb(90,188,216), rgb(255,192,203));
    }

    .two {
        background-image: linear-gradient(to right, rgb(216,178,216), rgb(90,188,216));
    }

    .three {
        background-image: linear-gradient(to right, rgb(178,216,216), rgb(216,178,178));
    }
`