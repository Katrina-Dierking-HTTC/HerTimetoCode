import styled from "styled-components";

export const HomeWrapper = styled.div`
    width: 100%;
    background: linear-gradient(
        to left, 
        rgba(25, 26, 26) 0%, 
        rgba(214, 122, 148) 100%
        );
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items:center;
    padding: 5%;
    padding-top:2%;
`

export const NameWrapper = styled.div`
    display:flex;
    flex-direction: column;
    text-align:center;
    width: 20%;

    .firstName, .lastName{
        padding: 7%;
        border: 2px solid black; 
    }

    .firstName {
        font-family:"Viaoda Libre";
        font-size: 70px;
        padding-top:9%;
    }

    .lastName {
        font-family:"Quicksand";
        margin-bottom: 5%;
        font-size: 46px;
        border-top:0;
    }

    .jobTitle {
        font-size: 26px;
        font-family:"Quicksand";
        font-weight: 500;
        color:#E4E1FF;
    }
`


export const BioWrapper = styled.div`
    width: 70%;
    align-items: center;
    display: flex;
    height: 50vh;
    text-align: center;
    border: 1px solid white;
    margin-top: 2%;
    margin-bottom: 5%;
    background:#000;

    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

    .profileImg {
        width: 30%;
        margin-left:2%;
    }

    .rotatingText-content { 
        position: relative;
        width: 100%;
      }
      
      .rotatingText-description { 
        font-family: "Quicksand";
        font-weight: 300;
        color:white;
        margin: 0;
        @media (min-width: 768px) { 
          font-size: 40px;
        }
      }

      
      .rotatingText-adjective { 
        font-family:"Viaoda Libre";
        font-weight: 300;
        color:#D67A94;
        font-size: 18px;
        left: 0;
        margin-bottom: 0;
        margin-top: 60px;
        padding-top: 3%;
        opacity: 0;
        position: absolute;
        right: 0;
        text-align: center;
        top: 0;
        
        @media (min-width: 768px) { 
          font-size: 40px;
        }
        
        &:nth-of-type(1) { 
          animation: rotate-text-up 2.0s 1.0s; 
        }
        
        &:nth-of-type(2) { 
          animation: rotate-text-up 2.0s 3.05s; 
        }  
        
        &:nth-of-type(3) { 
          animation: fade-text-in 2.0s 4.75s forwards;
        }
      }
      
      // Animations
      @keyframes rotate-text-up { 
        0% {
          transform: translate3d(0, 80px, 0);
          opacity: 0;
        }
        
        20%, 80% {
          transform: translate3d(0, 0, 0);
          opacity: 1;
        }
        
        100% {
          transform: translate3d(0, -40px, 0);
          opacity: 0;
        }
      }
      
      @keyframes fade-text-in { 
        0% {
          opacity: 0;
          transform: translate3d(0, 80px, 0);
        }
        
        50%, 100% {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
      
`


export const BottomWrapper = styled.div`
    width: 100%;
    display:flex;
    justify-content:space-evenly;

    .botLink {
        // padding:1%;
        width: 10%;
        text-align:center;
        font-size: 20px;
        color:white;
      }

    .botBtn{
        width: 170px;
        margin: 0 20px;
        padding: 15px 0;
        text-align: center;
        float: left;
        cursor: pointer;
        background: #000;
        position: relative;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
      }


    .BorderTopBottom:before {
        content: "";
        position: absolute;
        width: 20px;
        height: 3px;
        top: -6px;
        left: -7px;
        background: #000;
        transition: all 0.5s ease;
    }

    .BorderTopBottom:after {
        content: "";
        position: absolute;
        width: 20px;
        height: 3px;
        bottom: -6px;
        right: -7px;
        background: #000;
        transition: all 0.5s ease;
      }
      
    .BorderLeftRight:before {
        content: "";
        position: absolute;
        top: -4px;
        left: -7px;
        width: 3px;
        height: 25px;
        background: #000;
        transition: all 0.5s ease;
    }
      
    .BorderLeftRight:after {
        content: "";
        position: absolute;
        bottom: -4px;
        right: -7px;
        width: 3px;
        height: 25px;
        background: #000;
        transition: all 0.5s ease;
    }

    .botBtn:hover .BorderTopBottom:before,
    .botBtn:hover .BorderTopBottom:after {
        width: 154px;
        transition: all 0.5s ease;
    }

    .botBtn:hover .BorderLeftRight:before,
    .botBtn:hover .BorderLeftRight:after {
        height: 57px;
        transition: all 0.5s ease;
    }

/* media queries */

@media screen and (max-width: 780px) {
  
    width: 180px;
  }
  .botBtn {
    margin: 15px 0;
  }
}

`