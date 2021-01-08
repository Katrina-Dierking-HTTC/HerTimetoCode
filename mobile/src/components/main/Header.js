import React from 'react'
import {useMediaQuery} from 'react-responsive'

import topPink from '../../images/topPink.png'
import topBlue from '../../images/topBlue.png'
import title from '../../images/title.png'
import styled from 'styled-components'


export default function Header () {

    const isPhone = useMediaQuery({query: '(max-width: 500px)'})
    const isTablet = useMediaQuery({query:'(min-width: 501px)'})
    const isBetween = useMediaQuery({query:'(min-width: 501px)' && '(max-width: 800px)'})
    const isDesktop = useMediaQuery({query: '(min-width:801px)'})

    return (
        <>
        <div className = "header">
            <img src={topPink} className = "topPink" alt="tie-dyed pink background"/>
            <img src={topBlue} className = "topBlue" alt ="granulated blue background"/>
            
                {/* <div>
                <img src={title} className = "title" alt = "her time to code cursive" />
      
                <p className = "titleP">When women and tech collide
                    anything is possible</p>
                </div> */}

        </div>
        </>
    )
}

const TitleWrapper = styled.div`
    max-width:100%;
    background-color:red;
    position:fixed;
    z-index:99999;
    margin: 5%;
`
