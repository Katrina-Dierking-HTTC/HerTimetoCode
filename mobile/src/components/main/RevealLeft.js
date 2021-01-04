import React from 'react'
import { Image, Reveal } from 'semantic-ui-react'
import Poly1 from '../../images/Poly1.png'
import BP from '../../images/BP.png'
import Poly2 from '../../images/Poly2.png'
import WB1 from '../../images/WB1.png'
import Poly3 from '../../images/Poly3.png'
import Home_community from '../../images/Home_community.png'

const RevealLeft = () => {

    return (
        <div className = "RevealBox">
           
            <Reveal animated='rotate left' className= "rev1">
                <Reveal.Content visible>
                <Image src={Poly1} alt = "step 1"/>
                </Reveal.Content>
                <Reveal.Content hidden>
                <Image src = {BP} alt = "Blue print" className = "BP"/>
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
                <Image src={Poly2} alt = "step 2" />
                </Reveal.Content>
                <Reveal.Content hidden>
                <Image src={WB1} className = "WB" />
                </Reveal.Content>
            </Reveal>
          

            <Reveal animated='rotate right' className = "rev3">
                <Reveal.Content visible>
                <Image src={Poly3} alt = "step 3"/>
                </Reveal.Content>
                <Reveal.Content hidden>
                <Image src = {Home_community} alt = "Community" className = "comm"/>
                </Reveal.Content>
            </Reveal>
       
        </div>
    );

    };

export default RevealLeft