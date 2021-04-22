import styled from 'styled-components'
import {size} from '../design/MediaQueries'

export const ShopBody = styled.div`

    @media (max-width: ${size.xsmall}) {
        padding: 2%;
    }

    @media (min-width: ${size.small}) and (max-width: ${size.med}) {
        padding: 2%;
        max-width: 70vw;
        margin-left: 5%;
     }

    @media (min-width: ${size.large}) {
        width: 100vw;
        padding: 5%;
    }
`

export const ItemWrap = styled.div`

        margin-bottom:5%;
        max-width: 95vw;
    
`