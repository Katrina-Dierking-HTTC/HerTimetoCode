import React from 'react'
import Hero from '../hero/Hero'
import MainSection from '../main-section/MainSection'
import FeaturedCollection from '../featured-collection/FeaturedCollection'
import '../../../App.scss'
import Layout from '../shared/Layout'





function Shop () {

    return (
        <>
     
        <Layout>
            <Hero />
            <MainSection />
            <FeaturedCollection/>

        </Layout>
        </>

        
    )
}

export default Shop