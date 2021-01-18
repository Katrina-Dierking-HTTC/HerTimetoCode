import React from 'react'
import Home_testimonial from '../../images/Home_testimonial.png'
import Lyndsi from '../../images/Lyndsi.png'
import william from '../../images/william.png'
import Buddy from '../../images/Buddy.png'
import Btest from '../../images/Btest.png'
import alexis from '../../images/alexis.png' 
import Ltest from '../../images/Ltest.png'
import { flip } from 'react-animations'
import styled , {keyframes} from 'styled-components'
import Swal from 'sweetalert2'

const flipAnimation = keyframes `${flip}`;

export default function Testimonials () {

   
    return (
        <>
           <TestimonialWrapper>

                <div className = "test1">

                    <img src = {Lyndsi} className = "Lyndsi" alt = "Lyndsi's profile picture" />
                    <img src = {Ltest} className = "hide1" alt = "Lyndi's written testimonial" />
                    <br></br>
                
                </div>

                <div className = "test2">
                <img src = {william} className = "william" alt = "william's testimonial" />
                </div>

                <div className = "test3">
                <img src = {Buddy} className = "Buddy" alt = "Buddy's testimonial" />
                <img src = {Btest} className = "hide3" alt = "Buddy's written testimonial" />
                </div>

                <div className = "test4">
                <img src = {alexis} className = "alexis" alt = "alexis's testimonial" />
                </div>
                
            </TestimonialWrapper>

           

            </>
    )
}

const TestimonialWrapper = styled.div`
    background-image: linear-gradient(to right, rgb(11,102,123), rgb(226,25,121));
    padding: 2%;
    margin: 48% 0% 5% 0%;
    position:absolute;
    z-index: 99999;

    min-width: 100%;
    display:flex;
  

    .test1, .test2, .test3, .test4 {
        border-radius: 50%;
        min-width: 23%;
        margin: 1.5%;
        padding: 0% 1%;
        flex-direction: column;
    }


    .Lyndsi, .william, .Buddy, .alexis {
        max-width: 80%;
        border: 2px solid #e21979;
        margin-top: -30%;
        margin-left: -7%;
        border-radius: 50%;
        box-shadow: 1px .5px 10px 1px black;
        
    }

    .Lyndsi:hover, .william:hover, .Buddy:hover, .alexis:hover {
        animation: 1.5s ${flipAnimation};

    }

    .hide1, .hide3 {
        display:none;
    }
    
    .Lyndsi:hover + .hide1{
        color:black;
        display:block;
        max-width: 90vw;
        margin-left: 2%
        // position: absolute;
        // z-index: 99999:
    }

    .Buddy:hover + .hide3{
        color:black;
        display:block;
        max-width: 90vw;
        margin-left: -245%;

        // position: absolute;
        // z-index: 99999:
    }

`


