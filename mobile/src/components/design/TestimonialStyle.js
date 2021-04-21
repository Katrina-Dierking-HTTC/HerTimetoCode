import styled from 'styled-components'

export const TestimonialWrapper = styled.div`
    background-image: linear-gradient(to right, rgb(11,102,123), rgb(226,25,121));
    padding: 2%;
    margin: 8% 0% 15% 0%;
    z-index: 99999;
    min-width: 10vw;
    min-height: 10vh;
    display:flex;
  

    .test1, .test2, .test3, .test4 {
        border-radius: 50%;
        min-width: 23%;
        margin: 1.5%;
        padding: 0% 1%;
        flex-direction: column;
    }


    .Lyndsi, .William, .Buddy, .Jenn {
        max-width: 80%;
        border: 2px solid #e21979;
        margin-top: -35%;
        margin-left: -7%;
        border-radius: 50%;
        box-shadow: 1px .5px 10px 1px black;
        z-index: 99999999;
        
    }

    .Lyndsi:hover, .William:hover, .Buddy:hover, .Jenn:hover {
        animation: 1.5s ${flipAnimation};
        z-index: 99999;

    }

    .hide1, .hide2, .hide3, .hide4 {
        display:none;
    }
    
    .Lyndsi:hover + .hide1{
        display:block;
        max-width: 90vw;
        margin-left: 2%
    }

    .William:hover + .hide2 {
        display:block;
        max-width: 90vw;
        margin-left: -120%;
        margin-top: -7%;
    }

    .Buddy:hover + .hide3{
        display:block;
        max-width: 90vw;
        margin-left: -245%;
        margin-top: -7%;
    }

    .Jenn:hover + .hide4 {
        display:block;
        max-width: 90vw;
        margin-left: -360%;
        margin-top: -7%;
    }
`


  

