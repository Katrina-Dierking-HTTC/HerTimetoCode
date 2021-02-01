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

            <b class="hr anim"></b>
           
        </ItemInfoWrap>  
    );
};

export default ItemInfo;

const ItemInfoWrap = styled.div`
    // border-right: 1px dotted #e21979;
    // border: 1px dotted #e21979;
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

    ///////////////////////---DIVIDER ANIMATION -----------//////////////////////////////////////////
    .hr {
    
        width: 100%;
        height: 1px;
        display: block;
        position: relative;
        margin-bottom: 0em;
        padding: 2em 0;
    
        &:after,
        &:before {
    
            content: "";
            position: absolute;
    
            width: 100%;
            height: 1px;
            bottom: 50%;
            left: 0;
    
        }
    
        &:before {
    
            background: linear-gradient( 90deg, $bg 0%, $bg 50%, transparent 50%, transparent 100% );
            background-size: $barsize;
            background-position: center;
            z-index: 1;
    
        }
    
        &:after {
    
            transition: opacity 0.3s ease, animation 0.3s ease;
    
            background: linear-gradient(
                to right, 
                #62efab 5%, 
                #F2EA7D 15%, 
                #F2EA7D 25%, 
                #FF8797 35%, 
                #FF8797 45%, 
                #e1a4f4 55%, 
                #e1a4f4 65%, 
                #82fff4 75%, 
                #82fff4 85%, 
                #62efab 95%);
    
            background-size: 200%;
            background-position: 0%;
            animation: bar 15s linear infinite;
    
        }
    
        @keyframes bar {
    
            0% { background-position: 0%; }
            100% { background-position: 200%; }
    
        }
        
    }
    
    
    
    
    .hr.anim {
        &:before {
            background: linear-gradient( 
                90deg, 
                $bg 0%, $bg 5%, 
                transparent 5%, transparent 10%, 
                $bg 10%, $bg 15%, 
                transparent 15%, transparent 20%, 
                $bg 20%, $bg 25%,
                transparent 25%, transparent 30%,
                $bg 30%, $bg 35%, 
                transparent 35%, transparent 40%, 
                $bg 40%, $bg 45%, 
                transparent 45%, transparent 50%, 
                $bg 50%, $bg 55%,
                transparent 55%, transparent 60%,
                $bg 60%, $bg 65%,
                transparent 65%, transparent 70%, 
                $bg 70%, $bg 75%, 
                transparent 75%, transparent 80%, 
                $bg 80%, $bg 85%,
                transparent 85%, transparent 90%,
                $bg 90%, $bg 95%, 
                transparent 95%, transparent 100% );
    
            background-size: $barsize * 10;
            background-position: center;
            z-index: 1;
            
            animation: bar 120s linear infinite;
            
        }
        
        &:hover {
            &:before {
                animation-duration: 20s;
            }
            &:after {
                animation-duration: 2s;
            }
        }
    }
    
    
    
    
    
    body {
        
        background: $bg;
        padding: 4em;
        font-family: Lato;
        font-weight: 100;
        color: #696B89;
        text-indent: 1em;
        line-height: 1;
        
    }
    
    h1,h2 {
        line-height: 1;
        margin-bottom: -0.5em;
    }
    
    h2 {
        margin-top: 5em;
    }

`
