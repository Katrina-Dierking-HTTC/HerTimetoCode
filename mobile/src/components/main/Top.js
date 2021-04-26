import React from 'react'
import Link from 'react-router-dom'
import styled from 'styled-components'
import cursive1 from '../../images/cursive1.png'
import '../design/invite.styles.scss'


function Top () {
    return (
        <>
            <Id>
                <h3>Katrina Dierking | Web Developer | Her Time to Code</h3>
            </Id>

            <nav class="level py-3 nav is-desktop">
                <p class="level-item has-text-centered"><a href = '/' class="link is-info">Home</a></p>
                <p class="level-item has-text-centered"><a href = '/about' class="link is-info">About</a></p>
                <p class="level-item has-text-centered"><a href = "https://blog.hertimetocode.com" class="link is-info">Blog</a></p>
                <p class="level-item has-text-centered"><img src={cursive1}alt="" class="image"/></p>
                <p class="level-item has-text-centered"><a href = '/portfolio' class="link is-info">Portfolio</a></p>
                <p class="level-item has-text-centered"><a href = '/shop'class="link is-info">Shop</a></p>
                <p class="level-item has-text-centered"><a href = '/contact' class="link is-info">Contact</a></p>
            </nav>
        </>
    )
}
export default Top

const Id = styled.div`
    padding: 2vh;
    margin-bottom:1vh;
    text-align:center;

    h3{

    }

`