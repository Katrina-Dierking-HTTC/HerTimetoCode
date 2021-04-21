import React from 'react'
import Lyndsi from '../../images/Lyndsi.png'
import William from '../../images/William.png'
import Wtest from '../../images/Wtest.png'
import Buddy from '../../images/Buddy.png'
import Btest from '../../images/Btest.png'
import Jenn from '../../images/Jenn.png' 
import Jtest from '../../images/Jtest.png' 
import Ltest from '../../images/Ltest.png'
import click from '../../images/click.png'
// import { flip } from 'react-animations'
import {TestimonialWrapper} from '../design/TestimonialStyle'


// const flipAnimation = keyframes `${flip}`;

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
           
            <img src = {click} className = "click" alt = "Click to vew testimonials" />

            </>
    )
}

