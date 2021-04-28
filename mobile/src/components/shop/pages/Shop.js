import React from 'react'
import Hero from '../hero/Hero'
import MainSection from '../main-section/MainSection'
import FeaturedCollection from '../featured-collection/FeaturedCollection'
import '../../../App.scss'
import Layout from '../shared/Layout'





function Shop () {

    return (
        <>
        <div className= 'constBox'>
        <h2 className="const"> THE HTTP SHOP IS CURRENTLY UNDER CONSTRUCTION. PLEASE CHECK BACK LATER FOR UPDATES.</h2></div>
     
        <Layout>
            <Hero />
            <MainSection />
            <FeaturedCollection/>

        </Layout>
        </>

        
    )
}

export default Shop