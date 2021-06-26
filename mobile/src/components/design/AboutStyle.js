import styled from 'styled-components'

export const AboutTopWrapContent = styled.div`
    height: 70px;
    position: relative;
    box-shadow: 5px .5px 8px 3px black;

    .aboutH2Header {
        height: 70px;
        background: teal;
        position: relative;
        border-bottom: 1.5px solid black;
        color:white;
        padding: 3% 0 0 2%;
        font-size: 1rem;
        font-weight: 300;

        @media (min-width: 1024px) {
            padding-top:1%;
        }
      }
      

`

export const AboutBody = styled.div`
    height:100vh;
    width: 90vw;
    margin:2% 4%;
`

export const Me = styled.div`
      max-width: 90vw;
      min-height: 100vh;
     
      .me-top {
        display:flex;
        width: 80vw;
      }

      .me-top-img {
          width: 25vw;
          height: 25vw;

          @media (min-width: 1024px){
              width: 10vw;
              height:10vw;
          }
      }

      .me-para-bottom {
          max-width: 80vw;
      }

      .middle {
        background: #ececec;
        box-shadow: 4px .5px 12px 2px slategrey;
        width: 80vw;
        padding: 1%;
        min-height: 100vh;
        margin: 5% 0 0 5%;

        .fun-coffee{
            width: 6vw;
            height: 6vh;

            @media(min-width: 1024px) {
                width: 4vw;
                height:4vh;
            }
        }

        .pets-icon {
            width: 7vw;
            height: 7vh;

            @media(min-width: 1024px) {
                width: 5vw;
                height: 5vh;
            }
        }

        .pets-p {
            margin-left: 8%;
        }

        .facts-box {
            border-left: 1px solid #e21979;
            display:flex;
            max-width: 80vw;
            margin-left: 5%;
            padding: 3%;
            height: 10vh;

            .kids-icon {
                width: 7vw;
                height: 5vh;

                @media(min-width: 1024px) {
                    width: 3vw;
                }
            }
        }

        .kids {
            height: 5vh;
        }

        .facts-box {
            img{
                width:  5vw;
                height: 5vh;

                @media (min-width: 1024px){
                    width: 4vw;
                    height: 2vw;
                }
               
            }
        }


        .fb2 {
            max-width: 85vw;
        }

        .para {
            padding-left: 4%;
        }
        .coffee-p {
            margin-top: 3%;
            padding-left: 6%;

            @media(min-width: 1024px) {
                margin-top:1%;
                padding-left: 5%;
            }
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

        .petsImg {
            width: 5vw;


            @media(min-width: 1024px) {
                width: 2vw;
            }

        }
`
