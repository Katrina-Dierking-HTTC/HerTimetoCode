import React from 'react'
import Top from '../main/Top'
import FooterNav from '../main/FooterNav'
import styled from 'styled-components'

export default function Shop () {
    return (
        <>
            <Top />

            <ShopBody>
                <h3>Welcome to the HTTC Store</h3>
                <hr></hr>

                <ItemWrap>
                    <h4>JavaScript At a Glance</h4>
                    <div className = "ItemBody">
                        <img></img>
                    </div>
                    <div className = "ItemDescription">
                        <p>about this product</p>
                    </div>
                    <button className = "itemButton">Buy Now</button>
                </ItemWrap>
            </ShopBody>
            <FooterNav />
        </>
    )
}

const ShopBody = styled.div`
    border: 1px solid black;
`

const ItemWrap = styled.div`
    border: 1px solid green;
`