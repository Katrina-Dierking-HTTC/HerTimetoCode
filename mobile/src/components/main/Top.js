import React, {useState} from 'react'
import {useMediaQuery} from 'react-responsive'
import logo from '../../images/logo.png'
import styled from 'styled-components'
// import hamburger from '../../images/hamburger.png'

export default function Top () {

    const isPhone = useMediaQuery({query: '(max-width: 500px)'})

    const [open, setOpen] = useState(false);

    const  toggleMenu = () => {
        setOpen(!open);
    };


    return (
        <>

        <div className="topSection">
                <img src={logo} alt="girl at desk"  className = "corner-logo"/>
        
               <Wrapper>
                    <HeaderWrapper id='header'>
                        <div>
                        {/* <h3>Menu Demo</h3> */}
                        <MenuToggle onClick={toggleMenu} open={open}>
                            <RotateContainer open={open}>
                            <span  />
                            <span  />
                            <span  />
                            </RotateContainer>
                            </MenuToggle>
                        </div>
                    </HeaderWrapper>
                    <MenuWrapper open={open}>
                        <Menu open={open}>
                        <a href='/'>Home</a>
                        <a href='/'>About</a>
                        <a href='/'>Contact</a>
                         </Menu>
                    </MenuWrapper>
               </Wrapper>
        </div>


        </>
    )
}

const Menu = styled.div `
display:flex;
flex-direction:column;
`

const  Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }
`;

const  HeaderWrapper = styled.header`
  padding: 10px 0;
  color: #0b667bff;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: auto;
  z-index: 999;
`;

const  MenuToggle = styled.div`
  z-index: 9999;
  width: 30px;
  height: 30px;
  transform: rotate(0deg);
  transition: all 0.25s ease-in;
  cursor: pointer;
  margin-left: auto;
  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: #0b667bff;;
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

const  RotateContainer = styled.div`
  height: 100%;
  width: 100%;
  transition: ${(props) => props.open ? 'all 0.25s ease-in-out' : 'all 0.25s ease-in-out'};
  transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'none')};
`;

const  MenuWrapper = styled.div`
  background: #0b667bff;
  position: fixed;
  overflow: hidden;
  top: ${(props) => (props.open ? '0' : '-100%')};
  left: 0;
  z-index: 99999;
  margin-top: 66px;
  width: 100%;
  transition: ${(props) =>
  props.open ? 'all 0.25s ease-out' : 'all 0.6s ease-out'};
  box-shadow: 0px 4px 20px -5px #e8e8e8;
  padding: 12px;

`;
