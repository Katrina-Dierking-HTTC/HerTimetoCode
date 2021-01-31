import React, {useState} from 'react'
import {itemData} from '../../itemData'
import ItemCardDesk from '../main/ItemCardDesk'
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
                       <ItemCardDesk className = "card" propsFromShop={item} key ={index} />
                   ))}
                </ItemWrap>
                <hr></hr>
            </ShopBody>
            <br></br>
            <FooterNav />
        </>
    )
}

const ShopBody = styled.div`
    padding: 2%;
    max-width: 90vw;
    margin-left: 5%;
`

const ItemWrap = styled.div`

    margin-bottom:5%;
    max-width: 90vw;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
`