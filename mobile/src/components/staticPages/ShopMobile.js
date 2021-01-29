import React, {useState} from 'react'
import {itemData} from '../../itemData'
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
            <br></br>
            <FooterNav />
        </>
    )
}

const ShopBody = styled.div`
    padding: 2%;
`

const ItemWrap = styled.div`

    margin-bottom:5%;
`