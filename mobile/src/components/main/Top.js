import React, {useState} from 'react'
import {useMediaQuery} from 'react-responsive'
import { Link} from 'react-router-dom'


import {
    Wrapper, 
    HeaderWrapper, 
    MenuToggle, 
    RotateContainer, 
    Menu, 
    MenuWrapper, 
    MenuItem, 
    DropDown, 
    Item} from '../design/TopStyle'


export default function Top () {

    const isPhone = useMediaQuery({query: '(max-width: 500px)'})
    const isTablet = useMediaQuery({query:'(min-width: 501px)'})


    const [open, setOpen] = useState(false);

    const  toggleMenu = () => {
        setOpen(!open);
    };


    return (
        <> 
            {isPhone &&
              <Wrapper>
              <div className = "wordLogo">
                <p className = "httcLogo"> {`<HTT`}<span className ="code"><i>{`Code />`}</i></span> </p>
                </div>
                    <HeaderWrapper id='header'>
                        <MenuToggle onClick={toggleMenu} open={open}>
                            <RotateContainer open={open}>
                            <span  />
                            <span  />
                            <span  />
                            </RotateContainer>
                            </MenuToggle>
                    </HeaderWrapper>
                    <MenuWrapper open={open}>
                        <Menu open={open}>
                       
                                <MenuItem><Link to ='/'>Home</Link></MenuItem>
                                {/* <MenuItem><Link to ='/about'>About</Link></MenuItem> */}
                                <MenuItem><a href = 'https://katrina-dierking-httc.github.io/portfolio/' target="_blank" rel="noopener noreferrer">Portfolio</a></MenuItem>
                                <MenuItem><Link to ='/shop'>Shop</Link></MenuItem>
                                <MenuItem><a href ='https://blog.hertimetocode.com' target="_blank" rel="noopener noreferrer">Blog</a></MenuItem>
                                <MenuItem><Link to ='/community'>Community</Link></MenuItem>
                                <MenuItem><Link to ='/contact'>Contact</Link></MenuItem>
                        
                
                          </Menu>
                    </MenuWrapper>
               </Wrapper>
                }
                

                {isTablet && 
                    <DropDown>
                      <div className = "wordLogo">
                        <p className = "httcLogo"> {`<HTT`}<span className ="code"><i>{`Code />`}</i></span> </p>
                      </div>

                    
                            <Item><Link to ='/'>Home</Link></Item>
                            {/* <Item><Link to ='/about'>About</Link></Item> */}
                            <Item><a href = 'https://kd-portfolio.netlify.app' target="_blank" rel="noreferrer">Portfolio</a></Item>
                            <Item><Link to ='/shop'>Shop</Link></Item>
                            <Item><a href ='https://blog.hertimetocode.com' target="_blank" rel="noopener noreferrer">Blog</a></Item>
                            <Item><Link to ='/community'>Community</Link></Item>
                            <Item><Link to ='/contact'>Contact</Link></Item>
                      
                    </DropDown>                
                }

        </>
    )
}
