import React from 'react'
import styled from 'styled-components'
import ItemInfo from '../main/ItemInfo'


const ItemCard = ({propsFromShop}) => {

    return (
        <CardWrap>
            <h4 className = "cardH2">HTTC Product: </h4>
            <ItemInfo
                title = {propsFromShop.title}
                image = {propsFromShop.image}
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
    margin:2%;
`