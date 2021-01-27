import React from 'react'
import Media from 'react-media'
import ShopMobile from './ShopMobile'
import ShopDesk from './ShopDesk'


export default function Shop () {

    return (
        <>

        <div>
            <Media query = '(max-width:1023px)'>
                {(matches) => {
                    return matches ? <ShopMobile /> : <ShopDesk /> 
                }}
            </Media>
         </div>
        
        </>
    );
}