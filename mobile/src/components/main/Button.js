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
    max-width: 25%;
    border-radius: 10%;
    margin-left: 10%;
    margin-bottom: 3%;

    h3 {
        font-size: 1rem;
        color:white;
        text-align:center;
        padding: 1%;
    }
`