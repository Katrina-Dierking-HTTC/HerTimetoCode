import React, {useState} from 'react'
import {itemData} from '../itemData'
import ItemCard from '../main/ItemCard'
import Top from '../main/Top'
import FooterNav from '../main/FooterNav'
import styled from 'styled-components'

export default function Shop () {
    const [data] = useState(itemData);
    return (
        <>
            <Top />

            <ShopBody>
                <h3>Welcome to the HTTC Store</h3>
                <hr></hr>

                <ItemWrap>
                   {data.map((item, index) => (
                       <ItemCard propsFromShop={item} key ={index} />
                   ))}
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