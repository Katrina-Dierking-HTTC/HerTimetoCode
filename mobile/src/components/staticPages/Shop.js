import React, {useState} from 'react'
import {itemData} from '../../itemData'
import {ShopBody, ItemWrap} from '../design/ShopStyle'
import ItemCard from '../main/ItemCard'
import Top from '../main/Top'
import FooterNav from '../main/FooterNav'



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
