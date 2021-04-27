import styled from 'styled-components'
import {size} from './MediaQueries'

export const IntroWrap = styled.div`
    height: 20vh;
    display:flex;
    justify-content:center;

    margin-bottom:2%;

    //height:20vh;


    .hero-title{
        min-height:20vh;
        min-width: 100vw;
        

        //414
        // height: 50vh;
        // width: 50vw;
      }

    .hero {
        background-image: url('https://blog.hertimetocode.com/wp-content/uploads/2021/04/BG.png');
        height: 20vh;
    }
`


export const InviteWrap = styled.div`

    display:flex;
    flex-direction: column;
    justify-content:space-evenly;
    align-items:center;
    
    .introBox{
        width: 90vw;
        padding: 1vh;

        // width: 70vw;
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
        height: 65vh;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
        width: 90vw;
        margin-top:3%;
        
        
        
        // width: 90vw;
        // display:flex;
        // justify-content: space-between;
        // align-items:center;
        // margin-top: 5vh;
        // border:1px solid black;

        // width: 70vw;
    }
    .choice {
        border: 1px solid green;
        border-radius:5%;
        width: 75vw;
        // width: 20vw;
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
        // margin:1%;
    }
    .top {

        display:flex;
        flex-direction:row;
        // display:flex;
        // flex-direction:column;
        // justify-content: space-evenly;
        // align-items:center;

        // border: 1px solid orange;
        // display:flex;
        // justify-content: space-around;
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

    //     height: 20vh;
    //     padding:1vh;
    //     width: 20vw;
    //     margin:1.2vw;
    //     border: 1px solid white;
    
    }

    .botDesc{
        width: 70vw;
        font-weight: 600;


        // width: 20vw;
        // height: 40vh;
        // background-color:grey;
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