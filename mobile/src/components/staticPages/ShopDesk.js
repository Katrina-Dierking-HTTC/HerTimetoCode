import React, {useState} from 'react'
import {itemData} from '../../itemData'
import ItemCard from '../main/ItemCard'
import Top from '../main/Top'
import FooterNav from '../main/FooterNav'
import styled from 'styled-components'

export default function ShopDesk () {
    const [data] = useState(itemData);
    return (
        <>
            <Top />

            <ShopBody>
                <h3>Welcome to the HTTC Store</h3>
                <hr></hr>

                <ItemWrap>
                   {data.map((item, index) => (
                       <ItemCard className = "card" propsFromShop={item} key ={index} />
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
    border: 1px solid red;
    max-width: 90vw;
    margin-left: 5%;
`

const ItemWrap = styled.div`

    margin-bottom:5%;
    border: 1px solid green;
    max-width: 30vw;
    // display:flex;
    // flex-wrap:wrap;
`