import React from 'react'
import {useMediaQuery} from 'react-responsive'

import topPink from '../../images/topPink.png'
import topBlue from '../../images/topBlue.png'
import title from '../../images/title.png'


export default function Header () {

    return (
        <>
        <div className = "header">
            <img src={topPink} className = "topPink" alt="tie-dyed pink background"/>
            <img src={topBlue} className = "topBlue" alt ="granulated blue background"/>
            <img src={title} className = "title" alt = "her time to code cursive" />
            <p className = "titleP">when women and tech collide
            anything is possible</p>
        </div>
        </>
    )
}