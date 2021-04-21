// import React from 'react'
// import ItemCard from '../main/ItemCard'
import styled from 'styled-components'
import {size} from '../design/MediaQueries'

export const ShopBody = styled.div`

    @media (max-width: ${size.xsmall}) {
        padding: 2%;
        border: 2px solid red;
        background-color:yellow;
    }

    @media (min-width: ${size.small}) and (max-width: ${size.med}) {
        padding: 2%;
        max-width: 90vw;
        margin-left: 5%;
        background-color: green;
     }
`

export const ItemWrap = styled.div`

    @media (max-width: ${size.xsmall}) {
        margin-bottom:5%;
        display:flex;
        flex-direction: row;
        flex-wrap:wrap;
        background-color:red;
    }

    @media (min-width: ${size.small}) and (max-width: ${size.med}) {
        margin-bottom:5%;
        max-width: 90vw;
        display:flex;
        flex-direction: row;
        flex-wrap:wrap;
        background-color:blue;
    }
`