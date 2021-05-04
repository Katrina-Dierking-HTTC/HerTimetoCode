import React from 'react'
import {Link} from 'react-router-dom'
import {size} from '../design/MediaQueries'
import styled from 'styled-components'
import cursive1 from '../../images/cursive1.png'
import '../design/top.styles.scss'


function Top () {
    return (
        <>
            <Id>
                <h3>Katrina Dierking | Web Developer | Her Time to Code</h3>
            </Id>

            <Nav className="level py-3 nav is-desktop">
                <Link to= '/' className="link is-info">Home</Link>
                <Link to = '/about' className="link is-info">About</Link>
                <a href = "https://blog.hertimetocode.com" className="link is-info">Blog</a>
                <img src={cursive1}alt="" className="image"/>
                <Link to = '/portfolio' className="link is-info">Portfolio</Link>
                <Link to = '/shop'className="link is-info">Shop</Link>
                <Link to = '/contact' className="link is-info">Contact</Link>
            </Nav>
        </>
    )
}
export default Top

const Id = styled.div`
    padding: 2vh;
    margin-bottom:1vh;
    text-align:center;
`

const Nav = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;

    @media(min-width: ${size.medSm}) {
    flex-direction:row;
    }

    .image {
        @media(max-width: ${size.smMed}) {
            display:none;
        }

        @media(min-width: ${size.medSm}) {
            width: 20vw;
            height: 7vh;
        }
    }
`