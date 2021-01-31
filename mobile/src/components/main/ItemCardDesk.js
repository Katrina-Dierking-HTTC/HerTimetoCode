import React from 'react'
import styled from 'styled-components'
import ItemInfoDesk from '../main/ItemInfoDesk'


const ItemCardDesk = ({propsFromShop}) => {

    return (
        <CardWrap>
            <ItemInfoDesk
                title = {propsFromShop.title}
                price= {propsFromShop.price}
                image = {propsFromShop.image}
                description = {propsFromShop.description}
                
            />
        </CardWrap>
    )
}

export default ItemCardDesk;

const CardWrap = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:center;
    max-width: 26vw;
    margin: 1%;
`