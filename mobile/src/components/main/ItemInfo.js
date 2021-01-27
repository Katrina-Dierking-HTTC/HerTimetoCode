import React from 'react'
import Button from '../main/Button'
import styled from 'styled-components'


const ItemInfo = ({  title, image, description, price}) => {
    return (
    <>
        <ItemInfoWrap>
            <ul>
                <div className = "infoTop">
                    <p className = "info">{title}</p>
                    <p className = "infoP">{price}</p>
                </div>
                <img src= {image} className = "itemImg" alt = "item for sale" />
                <p className = "infoDesc">{description}</p>
                
            </ul>
            <Button />
        </ItemInfoWrap>
       
    </>
    );
};

export default ItemInfo;

const ItemInfoWrap = styled.div`
    border-bottom: 2px solid #e21979;
    // padding: 2%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    

    .infoTop {
        max-width: 90%;
        padding: 1%;
        display:flex;
        flex-direction: column;
        justify-content:space-between;
    }
    .info {
        font-size: 1.2rem;
        max-width: 60%;
    }

    .infoP{
        font-size: 1.2rem;
        padding:1%;
    }
    .itemImg {
        box-shadow: 1px .5px 8px 2px black;
        max-width: 30vw;
    }
`