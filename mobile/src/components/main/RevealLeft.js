import React from 'react'
import { Image, Reveal } from 'semantic-ui-react'
import step1 from '../../images/step1.png'
import HomeBP from '../../images/HomeBP.png'
import step2 from '../../images/step2.png'
import step3 from '../../images/step3.png'

const RevealLeft = () => ( 

    <Reveal animated='rotate left'>
        <Reveal.Content visible>
        <Image circular size='small' src={step1} alt = "step 1" />
        </Reveal.Content>
        <Reveal.Content hidden>
        <Image circular size='small' src = {HomeBP} alt = "Blue print"/>
        </Reveal.Content>
    </Reveal>
);

export default RevealLeft