import styled from 'styled-components'
import {size} from '../design/MediaQueries'

export const CardWrap = styled.div`
    display:flex;
    flex-direction:row;
    max-width: 40vw;
    margin: 1%;

    @media (min-width:${size.large}) {
        padding:5%;
        margin-left: 10%;
    }
`