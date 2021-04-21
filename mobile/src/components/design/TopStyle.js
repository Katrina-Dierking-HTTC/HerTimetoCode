import styled from 'styled-components'

export const MenuItem = styled.div `
    font-size: 1rem;
    color:white;
`
export const Menu = styled.div `
display:flex;
flex-direction:column;
`

export const  Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }

  .sub {
    margin-top:10%;
  }
`;

export const  HeaderWrapper = styled.header`
  padding: 10px 4%;
  color: #0b667bff;
  position: fixed;
  left: 10;
  top: 0;
  right: 0;
  bottom: auto;
  z-index: 999;
`;

export const  MenuToggle = styled.div`
  z-index: 9999;
  width: 20px;
  height: 20px;
  transform: rotate(0deg);
  transition: all 0.25s ease-in;
  cursor: pointer;
  margin-left: auto;
  span {
    display: block;
    position: relative;
    height: 2px;
    width: 100%;
    background: #17c436;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: ${(props) =>
    props.open ? 'all 0.25s ease-in' : 'all 0.25s ease-out'};
  } 
  span:nth-child(1) {
    top: ${(props) => (props.open ? 'calc(50% - 2px)' : '10%')};
    transform-origin: left center;
  }
  span:nth-child(2) {
    top: ${(props) => (props.open ? 0 : 'calc(50% - 2px)')};
    left: ${(props) => (props.open ? 'calc(50% - 2px)' : null)};
    width: ${(props) => (props.open ? '4px' : null)};
    height: ${(props) => (props.open ? '100%' : null)};
    transform-origin: left center;
  }
  span:nth-child(3) {
    top: calc(90% - 4px);
    transform-origin: left center;
    width: ${(props) => (props.open ? 0 : null)};
    opacity: ${(props) => (props.open ? 0 : 1)};
  }
`;

export const  RotateContainer = styled.div`
  height: 100%;
  width: 100%;
  transition: ${(props) => props.open ? 'all 0.7s ease-in-out' : 'all 0.25s ease-in-out'};
  transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'none')};
`;

export const  MenuWrapper = styled.div`
  background: #0b667bff;
  position: fixed;
  overflow: hidden;
  top: ${(props) => (props.open ? '0' : '-100%')};
  left: 0;
  z-index: 99999;
  margin-top: 0;
  width: 50%;
  transition: ${(props) =>
  props.open ? 'all 0.5s ease-out' : 'all 0.6s ease-out'};
  box-shadow: 0px 4px 20px -5px #e8e8e8;
  padding: 12px;

`;

export const DropDown = styled.div `
    max-width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    border-bottom: 2px solid #0b667bff;    
    // background-image: linear-gradient(180deg, #0b667bff , #e21979);
    background-image: linear-gradient(to right, rgb(11,102,123), rgb(226,25,121));
    padding-bottom: 2%;
    box-shadow: 1px .5px 10px 1px black;
    z-index:99999;

`
export const Item = styled.div`
    margin-top: 5%;
    color:white;
    font-size: .85rem;
    z-index: 999990;
`
