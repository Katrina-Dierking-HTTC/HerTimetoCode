import React from 'react'
import Button from '../main/Button'
import {ItemInfoWrap} from '../design/ItemInfoStyle'



const ItemInfo = ({  title, image, description, price}) => {
    return (

        <ItemInfoWrap>
            <ul>
                <div className = "infoTop">
                    <p className = "info">{title}</p>
                    <p className = "infoP">{price}</p>
                    {/* <Button /> */}
                </div>
                <img src= {image} className = "itemImg" alt = "item for sale" />
                <p className = "infoDesc">{description}</p>
                
            </ul>
            <b class="hr anim"></b>
           
        </ItemInfoWrap>  
    );
};

export default ItemInfo;

