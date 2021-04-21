import styled from 'styled-components'

export const Body = styled.div`
max-width: 100vw;
max-height: 100vh;
display:flex;
flex-direction:column;
align-items: center;
justify-content: space-between;
margin-top: 5%;
`

export const ComingWrap = styled.section`
border: 1px solid lightgrey;
max-width: 50%;
display:flex;
flex-direction: column; 
align-items: center;
padding: 5%;
`

export const Description = styled.div`
margin-top:2vh;
max-width: 70%;
background-color:lightgrey;
padding: 2%;

.desc-box{
    
    padding: 1%;
}
`

export const IconDrop = styled.div`
display:flex;
flex-direction: column;
max-width: 50%;
margin: 3% 0 0 8%;
`

export const Icon = styled.div`
display:flex;
flex-direction:row;
max-width: 80%;
padding: 2%;

.fa-coffee {
    color:#e21979;
}

.fa-fingerprint {
    color: teal;
}

.fa-code{
    color: limegreen;
}

.para {
    margin-left: 7%;
    margin-top: -1.5%;
    font-size: .8rem;
    padding: 2%;
}

.a {
    background-color:lightgrey;
}
`