import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { action } from 'mobx'
import { observer } from 'mobx-react'
import styled from 'styled-components'

import client from '../cmsApi'
import Header from '../components/Header'
import Categories from '../components/Categories'
import ActionButton from '../components/ActionButton.js'
import Footer from '../components/Footer'
import useStore from '../customHooks/useStore'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #3c3c3c;
`;

const WrapperContent = styled.div`
    max-width: 800px;
    min-height: 450px;
    padding: 25px 100px;
    display: flex;
    flex-direction: column;
    align-items: left;
    background-color: #f5eee8;
    margin: 32px 0;
    text-align: left;
    p {
        font-weight: 200;
        margin-bottom: 10px;
    }
    @media (max-width: 700px) {
        padding: 25px;
        margin: 0;
        p {
            margin-bottom: 6px;
            font-weight: normal;
            letter-spacing: 0.8px;
        }
    }
`;

const NotFoundLink = styled.p`
    cursor: pointer;
    :hover {
        color: #06d0b2;
        opacity: 0.7;
    }
`;

const BigImage = styled.img`
    max-width: 100%;
    @media (max-width: 700px) {
        max-width: 100%;
    }
`;

const SmallImgWrapper = styled.div`
    display: flex;
    flex-flow: wrap;
    width: 100%;
    margin-bottom: 16px;
`;

const SmallImg = styled.img`
    margin: 16px 12px 0px 0px;
    cursor: pointer;
    &:last-child {
        margin-right: 0px;
    }
    ${({ active }) => active && `
        opacity: 0.5;
	`}
`

const PriceText = styled.p`
    color:  #06d0b2;
    font-size: 18px;
    margin: 12px 0;
`;

const Dropdown = styled.select`
    color: #51616a;
    border-radius: 2px;
    border: 1px solid rgb(203, 207, 209);
    height: 36px;
    width: 200px;
    font-size: 16px;
    padding-left: 6px;
    background-color: white;
    :focus {
        outline: 0;
    }
    @media (max-width: 700px) {
        width: 100%;
    }
`


const Product = observer(({product, categories}) => {
    const [ bigImage, setBigImage ] = useState('')
    const [ selectedVariant, setSelectedVariant ] = useState('')
    const { store } = useStore()
    const { imageUrls, title, price, body, variants, images } = product

    useEffect(() => {
        if(product?.imageUrls) {
            setBigImage(product.imageUrls[0])
        }
        if(product?.variants && product?.variants.length > 0) { //sanity gives you an empty array if you have once opened this field, even if you never add or have deleted the variant..
            setSelectedVariant(product.variants[0].title)
        }
    }, [product])

    const addProductToCart = action((product) => {
        const productInfo = {
            id: product._id,
            title: product.title,
            images: product.imageUrls,
            price: product.price,
            quantity: 1,
            variant: selectedVariant,
        }
        store.addCart(productInfo)
    })

    const selectImg = (e) => {
        setBigImage(e.target.src)
    }

    const selectVariant = (e) => {
        setSelectedVariant(e.target.value )
    }


    if(Object.keys(product).length === 0 && product.constructor === Object) {
        return (
            <>
                <Header />
                <Wrapper>
                    <WrapperContent>
                        <h3>Denna produkt finns tyvärr inte.</h3>
                        <Link href={'/'}>
                            <NotFoundLink>se alla produkter från bellpepper.se</NotFoundLink>
                        </Link>
                    </WrapperContent>
                    </Wrapper>
                <Footer />
            </>
        )
    }
    else {
        //sanity gives you an empty array if you have once opened this field, even if you never add or have deleted the variant..
        const variant = variants && variants.length > 0 &&
            variants.map((item) => {
                return <option key={item._key} value={item.title}>{item.title}</option>
            })

        const imageArray = imageUrls.map((imageUrl, index) => {
            const active = imageUrl === bigImage
            return (
                <SmallImg key={index} active={active} src={imageUrl} onClick={selectImg} alt={images[index].alt || 'produktbild silversmycke'} height="100" width="100" />
            )
        })

        const texArray = body.map((section) => {
            return <p key={section[0]._key}>{section[0].text}</p>
        })

        return (
            <Wrapper>
                <Header />
                <Categories categories={categories}/>
                <WrapperContent>
                    <h3>{title}</h3>
                    <div>
                        <BigImage src={bigImage} alt="selected product picture" />
                    </div>
                    <SmallImgWrapper>
                        {imageArray}
                    </SmallImgWrapper>
                    {texArray}
                    <PriceText>{price} SEK</PriceText>
                    {variant &&
                        <Dropdown onChange={selectVariant} defaultValue={variants[0].title}>
                            {variant}
                        </Dropdown>
                    }
                    <ActionButton buttonText="Lägg till" onClick={() => {addProductToCart(product) }} />
                </WrapperContent>
                <Footer />
            </Wrapper>
        )
    }
})



Product.getInitialProps = async({ query: { title } }) => {
    const productQuery = `*[_type == 'product' && slug.current == '${title}'][0] {
        _id,
        title,
        slug,
        price,
        images,
        variants,
        "imageUrls": images[].asset->url,
        "body": body.se[].children[],
    }`;
    const product = await client.fetch(productQuery)

    const categoryQuery = `*[_type == 'category'] {
        title,
    }`;
    const categories = await client.fetch(categoryQuery)
    categories.unshift({title: 'Alla produkter'} )

    return {
        product, categories
    }
}


export default Product