import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import client from '../cmsApi'
import Header from '../components/Header'
import Products from '../components/Products.js'
import Categories from '../components/Categories'
import Footer from '../components/Footer'

const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #3c3c3c;
`

const IndexPage = ({ products, categories }) => {
    const [selectedCategory, setSelectedCategory] = useState('Alla produkter')
    const router = useRouter()

    useEffect(() => {
        if (router.query.category) {
            setSelectedCategory(router.query.category)
        } else {
            setSelectedCategory('Alla produkter')
        }
    }, [router])

    return (
        <Wrapper>
            <Head>
                <title>bell pepper: silversmycken</title>
                <meta
                    name="description"
                    content="Handgjorda smycken i 925 sterling silver, tillverkade i liten skala. Kvinnosymboler, geometriska former och stilren design."
                />
            </Head>
            <Header />
            <Categories
                categories={categories}
                selectedCategory={selectedCategory}
            />
            <Products products={products} selectedCategory={selectedCategory} />
            <Footer />
        </Wrapper>
    )
}

// This function gets called at build time
export const getStaticProps = async () => {
    const productsQuery = `*[_type == 'product'] | order(order asc) {
		_id,
		title,
		slug,
		images,
		price,
		"firstImageUrl": images[0].asset->url,
		"categories": categories[]->title,
	}`
    const products = await client.fetch(productsQuery)

    const categoryQuery = `*[_type == 'category'] {
		title,
	}`

    const categories = await client.fetch(categoryQuery)
    categories.unshift({ title: 'Alla produkter' })

    return {
        props: {
            products,
            categories,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in - At most once every 30 seconds
        // (needed to get the page updated when making changes in the cms, without having to rebuild the app)
        revalidate: 30,
    }
}

export default IndexPage
