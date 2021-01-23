import React from 'react'
import Button from '../main/Button'
import styled from 'styled-components'


const ItemInfo = ({  title, image, description, price}) => {
    return (
    <>
        <ItemInfoWrap>
            <ul>
                <p className = "info">{title}</p>
                <img src= {image} alt = "item"/>
                <p className = "infoDesc">{description}</p>
                <p className = "info">{price}</p>
            </ul>
            <Button />
        </ItemInfoWrap>
       
    </>
    );
};

export default ItemInfo;

const ItemInfoWrap = styled.div`
    border: 2px solid red;
    padding: 2%;
`