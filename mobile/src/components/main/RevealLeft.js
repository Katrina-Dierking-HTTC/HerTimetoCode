import React from 'react'
import { Image, Reveal } from 'semantic-ui-react'
import oct1 from '../../images/oct1.png'
import BP from '../../images/BP.png'
import oct2 from '../../images/oct2.png'
import WB1 from '../../images/WB1.png'
import oct3 from '../../images/oct3.png'
import Home_community from '../../images/Home_community.png'
import styled from 'styled-components'

const RevealLeft = () => {

    return (
        <div className = "RevealBox">
           
            <Reveal animated='rotate right' className= "rev1">
                <Reveal.Content visible>
                <Image src={oct1} alt = "step 1"/>
                </Reveal.Content>
                <Reveal.Content hidden>
                <Image src={WB1} className = "WB" />
                <p className = "oct1P">Tools</p>
                </Reveal.Content>
            </Reveal>
           

            {/* <Reveal animated='rotate left' className = "rev2">
                <Reveal.Content visible>
                <Image src={Poly2} alt = "step 2"/>
                </Reveal.Content>
                <Reveal.Content hidden>
                <Image src = {WB1} alt = "Workbook" className = "WB"/>
                </Reveal.Content>
            </Reveal> */}

            <Reveal animated='small fade' className = 'rev2'>
                <Reveal.Content visible>
                <Image src={oct2} alt = "step 2" className = "oct2"/>
                </Reveal.Content>
                <Reveal.Content hidden>
                <Image src = {Home_community} alt = "Community" className = "comm"/>
                <p className = "oct2P"> Collaboration</p>
                </Reveal.Content>
            </Reveal>
          

            <Reveal animated='rotate left' className = "rev3">
                <Reveal.Content visible>
                <Image src={oct3} alt = "step 3"/>
                </Reveal.Content>
                <Reveal.Content hidden>
                <Image src={WB1} className = "WB" />
                <p className = "oct3P"> Freedom</p>
                </Reveal.Content>
            </Reveal>
       
        </div>
    );

    };

export default RevealLeft
