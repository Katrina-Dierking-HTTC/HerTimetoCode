import React from 'react'
import styled from 'styled-components'

const ItemInfo = ({ title, img, description, price}) => {
    return (
        <ItemInfoWrap>
            <ul>
                <p className = "info">{title}</p>
                <img></img>
                <p className = "info">{description}</p>
                <p className = "info">{price}</p>
            </ul>
        </ItemInfoWrap>
    );
};

export default ItemInfo;

const ItemInfoWrap = styled.div`
    border: 2px solid red;
    padding: 2%;
`