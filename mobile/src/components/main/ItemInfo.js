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
                    <Button />
                </div>
                <img src= {image} className = "itemImg" alt = "item for sale" />
                <p className = "infoDesc">{description}</p>
                
            </ul>
           
        </ItemInfoWrap>
       
    </>
    );
};

export default ItemInfo;

const ItemInfoWrap = styled.div`
    border-right: 1px dotted #e21979;
    border-bottom: 1px dotted #e21979;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    min-width: 20vw;
    margin: 1%;
    padding-right: 1%;
    

    .infoTop {
        max-width: 100vw;
        display:flex;
        flex-direction: row;
        justify-content:space-between;
     
    }
    .info {
        font-size: 1.2rem;
        max-width: 80%;
    }

    .infoP{
        font-size: 1.2rem;
        padding:1%;
    }
    .itemImg {
        box-shadow: 1px .5px 8px 2px black;
        max-width: 30vw;
    }

    .infoDesc {
        background: blue;
        margin-right: 5%;
    }
`