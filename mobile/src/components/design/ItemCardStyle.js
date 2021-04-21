import styled from 'styled-components'
import {size} from '../design/MediaQueries'

export const CardWrap = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    // align-items:center;
    max-width: 55vw;
    margin: 1%;


    @media (min-width: ${size.small}) and (max-width: ${size.med}) {
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        align-items:center;
        max-width: 26vw;
        margin: 1%;
    }
`