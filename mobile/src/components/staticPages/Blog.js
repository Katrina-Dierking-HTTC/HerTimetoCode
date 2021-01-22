import React from 'react'
import Top from '../main/Top'
import FooterNav from '../main/FooterNav'
import styled from 'styled-components'

export default function Blog () {
    return (
    <>
    <Top />
    <h2> Blog</h2>
    <BlogBody>
        <h3>A Brand New Year ... or is it? </h3>
        <p>hhiopahpoihda[ihfodp</p>
    </BlogBody>
    

    <FooterNav />
    </>
    )
}

const BlogBody = styled.div`
    border: 1px solid black;
    padding: 3%;

`