import React from 'react'
import Home_testimonial from '../../images/Home_testimonial.png'

export default function Testimonials () {
    return (
           <div className="testbox">
                <img src = {Home_testimonial} alt= "testimonial background block" className = "testimonialBlock" />
                <p className = "testP"> “I am forever grateful for [Katrina’s] notes throughout the program that were not only thorough, 
                but they were also broken down into parts which made a daunting subject so much easier to understand.”
                 ~ M. Morris, 
                Full Stack Web Dev Student</p>
            </div>
    )
}