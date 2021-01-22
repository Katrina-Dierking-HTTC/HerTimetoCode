import React from 'react'
import Lyndsi from '../../images/Lyndsi.png'
import William from '../../images/William.png'
import Wtest from '../../images/Wtest.png'
import Buddy from '../../images/Buddy.png'
import Btest from '../../images/Btest.png'
import Jenn from '../../images/Jenn.png' 
import Jtest from '../../images/Jtest.png' 
import Ltest from '../../images/Ltest.png'
import { flip } from 'react-animations'
import styled , {keyframes} from 'styled-components'


const flipAnimation = keyframes `${flip}`;

export default function Testimonials () {

   
    return (
        <>
           <TestimonialWrapper>

                <div className = "test1">

                    <img src = {Lyndsi} className = "Lyndsi" alt = "Lyndsi's profile" />
                    <img src = {Ltest} className = "hide1" alt = "Lyndi's written testimonial" />
                    <br></br>
                
                </div>

                <div className = "test2">
                <img src = {William} className = "William" alt = "william's profile" />
                <img src = {Wtest} className = "hide2" alt = "William Herman's testimony for Her Time to Code" />
                </div>

                <div className = "test3">
                <img src = {Buddy} className = "Buddy" alt = "Buddy's testimonial" />
                <img src = {Btest} className = "hide3" alt = "Buddy's written testimonial" />
                </div>

                <div className = "test4">
                <img src = {Jenn} className = "Jenn" alt = "Jenn's testimonial" />
                <img src = {Jtest} className = "hide4" alt = "Jenn's written testimonial" />
                </div>
                
            </TestimonialWrapper>

           

            </>
    )
}

const TestimonialWrapper = styled.div`
    background-image: linear-gradient(to right, rgb(11,102,123), rgb(226,25,121));
    padding: 2%;
    margin: 45% 0% 7% 0%;
    position:absolute;
    z-index: 99999;

    min-width: 100%;
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


