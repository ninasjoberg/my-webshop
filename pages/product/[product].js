import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import styled from 'styled-components'
import client from '../../cmsApi'
import { addCart } from '../../redux/cartSlice'
import Header from '../../components/Header'
import Categories from '../../components/Categories'
import ActionButton from '../../components/ActionButton.js'
import Footer from '../../components/Footer'


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


const Product = ({ product, categories }) => {
    const [ bigImage, setBigImage ] = useState('')
    const [ selectedVariant, setSelectedVariant ] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        if(product?.imageUrls) {
            setBigImage(product.imageUrls[0])
        }
        if(product?.variants && product?.variants.length > 0) { //sanity gives you an empty array if you have once opened this field, even if you never add or have deleted the variant..
            setSelectedVariant(product.variants[0].title)
        }
    }, [product])

    const addProductToCart = (product) => {
        const productInfo = {
            id: product._id,
            title: product.title,
            images: product.imageUrls,
            price: product.price,
            quantity: 1,
            variant: selectedVariant,
        }
        dispatch(addCart(productInfo))
    }

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
                        <Link href={'/'} passHref>
                            <NotFoundLink>se alla produkter från bellpepper.se</NotFoundLink>
                        </Link>
                    </WrapperContent>
                    </Wrapper>
                <Footer />
            </>
        )
    }
    else {
        const { imageUrls, title, price, body, variants, images } = product

        //sanity gives you an empty array if you have once opened this field, even if you never add or have deleted the variant..
        const variant = variants?.length > 0 &&
            variants.map((item) => {
                return <option key={item._key} value={item.title}>{item.title}</option>
            })

        const imageArray = imageUrls?.map((imageUrl, index) => {
            const active = imageUrl === bigImage
            return (
                <SmallImg key={index} active={active} src={imageUrl} onClick={selectImg} alt={images[index].alt || 'produktbild silversmycke'} height="100" width="100" />
            )
        })

        const texArray = body?.map((section) => {
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
                        <Dropdown onChange={selectVariant} defaultValue={variants[0]?.title}>
                            {variant}
                        </Dropdown>
                    }
                    <ActionButton buttonText="Lägg till" onClick={() => {addProductToCart(product) }} />
                </WrapperContent>
                <Footer />
            </Wrapper>
        )
    }
}

// from: https://nextjs.org/docs/basic-features/data-fetching
// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if the path has not been generated.
export const getStaticPaths = async() => {
    const productsSlugsQuery = `*[_type == 'product' && defined(slug.current)][].slug.current`
    const slugs = await client.fetch(productsSlugsQuery)

    // Get the paths we want to pre-render based on products
    const paths = slugs.map((product) => ({
        params: { product },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' }
}

// This function also gets called at build time
export const getStaticProps = async({ params }) => {

    // google search console searches for page product/[product] which gives params === undefined and generates a 500
    // this is done to avoid that...
    if(Object.keys(params).length === 0 && params.constructor === Object) {
        return {
            props: {product: {}, categories: {}},
        }
    }

    else {
        const productQuery = `*[_type == 'product' && slug.current == '${params.product}'][0] {
            _id,
            title,
            slug,
            price,
            images,
            variants,
            "imageUrls": images[].asset->url,
            "body": body.se[].children[],
        }`;
        const product = await client.fetch(productQuery, {slug: params.product})

        const categoryQuery = `*[_type == 'category'] {
            title,
        }`;
        const categories = await client.fetch(categoryQuery, {slug: params.product})
        categories.unshift({title: 'Alla produkter'} )

        return {
            props: {
                product, categories
            },
            // Next.js will attempt to re-generate the page:
            // - When a request comes in - At most once every 30 seconds
            // (needed to get the page updated when making changes in the cms, without having to rebuild the app)
            revalidate: 30,
        }
    }
}

export default Product