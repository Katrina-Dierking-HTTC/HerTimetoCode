import styled from "styled-components";

export const ResumeWrapper = styled.div`
    width: 100%;
    padding: 2%; 
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;

    background: linear-gradient(
        to left, 
        rgba(214, 122, 148) 0%,
        rgba(31, 53, 72) 100%
        );

    .topRes{
        width: 100%;
        text-align:center;
        font-size: 64px;
        color:white;
        background:black;
        margin-bottom:2%;
        padding:3%;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

    }

    .pdf, .resP {
        font-size: 34px; 
        width: 50%;
        text-align:center;
        padding-top: 2%;
    }


`