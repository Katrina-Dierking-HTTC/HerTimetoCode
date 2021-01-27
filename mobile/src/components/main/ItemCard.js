import React from 'react'
import styled from 'styled-components'
import ItemInfo from '../main/ItemInfo'


const ItemCard = ({propsFromShop}) => {

    return (
        <CardWrap>
            <ItemInfo
                title = {propsFromShop.title}
                price= {propsFromShop.price}
                image = {propsFromShop.image}
                description = {propsFromShop.description}
                
            />
        </CardWrap>
    )
}

export default ItemCard;

const CardWrap = styled.div`
    display:flex;
    flex-direction:column;
`