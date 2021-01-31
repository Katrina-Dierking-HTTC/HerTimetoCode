import React from 'react'
import styled from 'styled-components'


export default function Button () {
    return (
        <ButtonWrap>
            <h3>Purchase</h3> 
        </ButtonWrap>
    )
}

const ButtonWrap = styled.div`
    background-color: #17c436;
    border-radius: 10%;
    margin-left: 2vw;
    max-width: 20vw;
    padding:1.5%;
    max-height: 4vh;

    h3 {
        font-size: .85rem;
        color:white;
        text-align:center;
        padding: 1%;
    }
`