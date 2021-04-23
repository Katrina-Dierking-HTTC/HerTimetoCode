import React from 'react'
import Footer from '../footer/Footer'
import Header from '../shopHeader/Header'

function Layout({children}) {
    return (
        <>
        <Header />
        <main>
            {
                children
            }
        </main>
        <Footer />
        </>
    )
}

export default Layout
