import styled from 'styled-components'

const AboutTopWrapContent = styled.div`
    height: 70px;
    position: relative;
    box-shadow: 5px .5px 8px 3px black;

    .aboutH2Header {
        height: 50px;
        background: teal;
        position: relative;
        border-bottom: 1.5px solid black;
        color:white;
        padding-left: 2%;
        padding-top:2%;
        font-size: 1rem;
        font-weight: 300;
      }
      
`

const AboutBody = styled.div`
    height:100vh;
    width: 90vw;
    margin:2% 4%;
`

const Me = styled.div`
      max-width: 90vw;
      min-height: 100vh;

      .me-top {
        display:flex;
        width: 80vw;
      }

      .me-para-bottom {
          max-width: 80vw;
      }

      .middle {
        background: #ececec;
        width: 80vw;
        padding: 1%;
        min-height: 100vh;

        .pets-icon {
            max-width: 50px;
        }

        .pets-p {
            margin-left: 8%;
        }

        .facts-box {
            border-left: 1px solid #e21979;
            display:flex;
            max-width: 70vw;
            margin-left: 1%;
            padding-left: 3%;
            height: 5vh;
        }


        .fb2 {
            max-width: 85vw;
        }

        .para {
            padding-left: 2%;
        }

        .who-I-am {
            max-width: 80vw;
        }

      }

      .pets {
          border:.5px solid grey;
          margin-left: 5%;
          padding: 1%;
          max-width: 40vw;
          margin:0% 0 0 15%;
          background-color: white;

          display:flex;
          flex-direction:row;
          flex-wrap:wrap;
          justify-content:space-between;
      }
      .pets-box{
        box-shadow: 4px .5px 12px 2px slategrey;
        width: 15vw;
        padding: 1%;
        margin: 1%;
        }

        .a {
            background-color:teal;
        }
        .b {
            background-color: grey;
        }
`
const Goals = styled.div`
    padding-left: 5%;
    max-width: 77vw;
    
    .top {
        display:flex;
        justify-content: space-evenly;
        width: 25vw;
        padding-top:2%;
    }
`
const Projects = styled.div`
    padding-left: 5%;
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    justify-content:space-between;
    background: #ececec;

    .top {
        display:flex;
        width: 45vw;
        padding-top:1%;
    }
`



const Cards = styled.div`
    display:flex;
    flex:wrap;
    min-width: 100vw;

    .proj-card {
        min-width:15vw;
        height: 90vh;
        border: 1px solid black;
        margin: 1% 0 0 1%;
    }

    .proj-title {
        max-height: 2vh;
        background-color: teal;
        margin-top: 0%;
        padding:2% 0 4% 4%;
        border: 2px solid black;
    }

    .proj-code {
        margin-left: 12%;
    }
`
    const Passions = styled.section`
    
    `


    export {
        AboutTopWrapContent,
        AboutBody,
        Me,
        Goals,
        Projects,
        Cards,
        Passions
    }