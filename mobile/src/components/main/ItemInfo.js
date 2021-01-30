import React from 'react'
import Button from '../main/Button'
import styled from 'styled-components'


const ItemInfo = ({  title, image, description, price}) => {
    return (

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
    );
};

export default ItemInfo;

const ItemInfoWrap = styled.div`
    border-right: 1px dotted #e21979;
    border: 1px dotted #e21979;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    max-width: 30vw;
    margin: 1%;
    padding-right: 1%;
    

    .infoTop {
        max-width: 100vw;
        display:flex;
        flex-direction: row;
        justify-content:space-between;
        margin-left: -7%;
     
    }
    .info {
        font-size: 1rem;
        max-width: 80%;
    }

    .infoP{
        font-size: 1rem;
        padding:0 1%;
    }
    .itemImg {
        margin-left: 8%;
        max-width: 40vw;
    }

    .infoDesc {
        border: .5px solid lightgrey;
        margin-right: 5%;
        margin-left: -7%;
        padding: 2% 4%;
    }
`