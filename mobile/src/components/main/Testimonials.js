import React from 'react'
import Home_testimonial from '../../images/Home_testimonial.png'
import Lyndsi from '../../images/Lyndsi.png'
import william from '../../images/william.png'
import Buddy from '../../images/Buddy.png'
import alexis from '../../images/alexis.png' 
import { flip } from 'react-animations'
import styled , {keyframes} from 'styled-components'
import Swal from 'sweetalert2'

const flipAnimation = keyframes `${flip}`;

export default function Testimonials () {

   
    return (
        <>
           <TestimonialWrapper>
                <div className = "test1">
                    <img src = {Lyndsi} className = "Lyndsi" alt = "Lyndsi's testimonial" />
                
                        {/* <p className = "hideL">Katrina's notes have detailed illustrations that demonstrate the material in a nice, visually-pleasing way. A nice change of pace, as compared to many other instructional materials that are mostly just blocks of text. I recommended her notes to any students I had that were struggling with the content, they helped many struggling students. I've used them myself!</p> */}
                
                </div>

                <div className = "test2">
                <img src = {william} className = "william" alt = "william's testimonial" />
                </div>

                <div className = "test3">
                <img src = {Buddy} className = "Buddy" alt = "Buddy's testimonial" />
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
    padding: 2% 0% 2% 0%;
    margin-top: 60%;
    position:absolute;
    min-width: 100%;
    max-height: 20%;
    display:flex;


    .test1, .test2, .test3, .test4 {
        border-radius: 50%;
        min-width: 23%;
        margin: 1%;
        padding: 0% 1%;
    }


    .Lyndsi, .william, .Buddy, .alexis {
        max-width: 80px;
        border: 2px solid #e21979;
        margin-top: -50%;
        margin-left: -7%;
        border-radius: 50%;
        
    }

    .Lyndsi:hover, .william:hover, .Buddy:hover, .alexis:hover {
        animation: 1.5s ${flipAnimation};

    }

    .hideL {
        display:none;
    }
    
    .Lyndsi:hover + .hideL {
        color:black;
        display:flex;
        flex-direction:column;
        min-width: 100%;
    }

`


