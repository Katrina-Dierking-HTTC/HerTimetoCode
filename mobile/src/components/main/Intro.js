import React from 'react'
import Home_me from '../../images/Home_me.png'
import Home_frame from '../../images/Home_frame.png'
import me3 from '../../images/me3.png'
import {useMediaQuery} from 'react-responsive'

export default function Intro () {

    
    const isPhone = useMediaQuery({query: '(max-width: 500px)'})
    const isTablet = useMediaQuery({query:'(min-width: 501px)'})
    const isBetween = useMediaQuery({query:'(min-width: 501px)' && '(max-width: 800px)'})
    const isDesktop = useMediaQuery({query: '(min-width:801px)'})


    return (
        <>

        {isPhone &&
            <section className = "introPhone">
                <div className = "phoneTopPic">

                    <img src = {"https://s4.aconvert.com/convert/p3r68-cdx67/aa4ir-25tai.svg"} className = "myVector"/>
                </div>

                <div className = "intro-text1">
                    <h1 className = "hi1">Hi,</h1>
                    <h3 className = "Katrina1">I'm Katrina Dierking</h3>
                    <p className = "home-intro1">I give women the tools they need today to 
                    become skilled web developers of tomorrow. </p>
                </div>
            </section>
        }


        {isTablet &&
        <section className="intro">
            <div className = "pic">
                 <img src = {Home_frame} alt = "frame around Katrina's picture on home page" className = "frame" />
                <img src = {Home_me} alt="Katrina Dierking, Founder of Her Time to Code" className = "HomeImg" />
            </div>

            <div className = "intro-text">
                <h1 className = "hi">Hi,</h1>
                <h3 className = "Katrina">I'm Katrina Dierking</h3>
                <p className = "home-intro">I give women the tools they need today to 
                 become skilled web developers of tomorrow. </p>
            </div>
        </section>
        }
        </>
    );
}