import React, {useState} from 'react'
import styled from 'styled-components'


const ItemCard = ({propsFromShop}) => {

    return (
        <CardWrap>
            <h2>Her Time to Code Products: </h2>
            <ItemInfo
                title = {propsFromShop.title}
                img = {propsFromShop.img}
                description = {propsFromShop.description}
                price= {propsFromShop.price}
            />
        </CardWrap>
    )
}

export default ItemCard;

const CardWrap = styled.div`
    border: 2px solid blue;
    padding: 2%;
`