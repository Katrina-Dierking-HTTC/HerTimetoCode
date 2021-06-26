import styled from "styled-components";

export const ProPage = styled.div`
    width: 100%;
    background: linear-gradient(
        to left, 
        rgba(25, 26, 26) 0%, 
        rgba(1, 200, 238, 238) 100%
        );

    .proTitles {
        font-family:"Quicksand";
        font-size: 52px;
        text-align:center;
        width: 100%;
        padding: 2%;
        background: white;
        border-bottom: 2px solid black;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
`
export const ProjectBody = styled.div`
    width: 100%;
    display:flex;
    justify-content: space-evenly;
`
export const ProWrapper = styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    flex-wrap: wrap;
   
`

export const ProCardWrapper = styled.div`
    width: 25%;
    border: 1px solid black;
    margin: 2%;
    background-color:white;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`

export const ProjectDescWrapper = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column; 
    justify-content: space-evenly; 
    align-items: center;

    .title {
        font-family:"Viaoda Libre";
        font-size: 30px;
        margin-left: 0;
    }
    .proImg {
        width: 45aZZZZZZZZZZZZZZZZZZZZZZZz0px;
        height: 400px;
    }

    .desc, .tech, .proLink {
        width: 75%;
    }

    .descBx {
        width: 95%;
        padding: 4%;
        background:#d6d6d6;
        margin-bottom: 3%;
        border: .5px solid slategrey;

        p {
            font-size: 18px;
        }
    }

    .descOne {
        background-color:white;
        padding: 1%;
        margin-bottom: 1%;
    }
`