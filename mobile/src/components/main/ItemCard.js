import React from 'react'
import {CardWrap} from '../design/ItemCardStyle'
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

