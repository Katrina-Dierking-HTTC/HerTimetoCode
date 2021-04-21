import React, {useState} from 'react'
// import Media from 'react-media'
// import ShopMobile from './ShopMobile'
// import ShopDesk from './ShopDesk'
import {itemData} from '../../itemData'
import ItemCard from '../main/ItemCard'
import Top from '../main/Top'
import FooterNav from '../main/FooterNav'
// import styled from 'styled-components'
// import {size} from '../design/MediaQueries'
import {ShopBody, ItemWrap} from '../design/ShopStyle'


export default function Shop () {
    const [data] = useState(itemData);
    return (
        <>
            <Top />

            <ShopBody>
                <h3>Welcome to the HTTC Store</h3>
                <hr></hr>

                <ItemWrap>
                   {data.map((item, index) => (
                       <ItemCard propsFromShop={item} key ={index} />
                   ))}
                </ItemWrap>
            </ShopBody>
            <br></br>
            <FooterNav />
        </>
    )
}

// const ShopBody = styled.div`

// @media (max-width: ${size.xsmall}) {
//         background-color:yellow;
//     }
//     @media (min-width: ${size.small}) and (max-width: ${size.med}) {
//         background-color:red;
//     }
//     @media (min-width: ${size.large}){
//         background-color:blue;
//     }
   
// `
// const ItemWrap = styled.div ``


// export default function Shop () {

//     return (
//         <>

//         <div>
//             <Media query = '(max-width:1023px)'>
//                 {(matches) => {
//                     return matches ? <ShopMobile /> : <ShopDesk /> 
//                 }}
//             </Media>
//          </div>
        
//         </>
//     );
// }