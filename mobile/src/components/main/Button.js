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
    background-color:teal;
    border: 1px solid black;
    max-width: 20%;
    border-radius: 20%;
    
    h3 {
        font-size: 1rem;
        color:white;
        text-align:center;
    }
`