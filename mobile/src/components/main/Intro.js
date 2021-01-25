import React from 'react'
import Media from 'react-media'
import IntroMobile from './IntroMobile'
import IntroDesk from './IntroDesk'


export default function Intro () {

    return (
        <>

        <div>
            <Media query = '(max-width:1023px)'>
                {(matches) => {
                    return matches ? <IntroMobile /> : <IntroDesk /> 
                }}
            </Media>
         </div>
        
        </>
    );
}