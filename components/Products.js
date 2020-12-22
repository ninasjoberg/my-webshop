import React from 'react';
import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 0px;
`;

const ProductWrapper = styled.li`
    background-color: #f5eee8;
    padding: 12px;
    margin: 12px;
    :hover{
        filter: brightness(120%);
    }
    @media (max-width: 700px) {
        width: 45%;
        padding: 0 0 6px;
        margin: 6px;
    }
    ${({ hidden }) => hidden && `
		display: none;
	`}
`;

const DispalyProduct = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #51616a;
    letter-spacing: 0.6px;
    font-weight: 200;
    max-width: 300px;
    img{
        max-width: 100%;
        max-height: 100%;
    }
    @media (max-width: 700px) {
        h3, p {
            font-size: 12px;
            margin: 0;
        }
        img {
            margin-bottom: 8px;
        }
    }
`;




const ProductLink = ({ slug, img, alt, title, price, hidden}) => (
	<ProductWrapper hidden={hidden}>
		<Link
			as={`/product/${slug}`}
            href={`/product?title=${slug}`}
            passHref
		>
            <DispalyProduct>
                <img src={img} alt={alt || 'produktbild silversmycke'} />
                <h3>{title}</h3>
                <p>{price} SEK</p>
            </DispalyProduct>
		</Link>
	</ProductWrapper>
)



const Products = ({ products, selectedCategory }) => {
    const productList = products.map((product) => {
        const isHidden = selectedCategory === 'Alla produkter' ? false : !product.categories.includes(selectedCategory)
        return (
            <ProductLink key={product._id} hidden={isHidden} key={product._id} id={product._id} title={product.title} slug={product.slug.current} img={product.firstImageUrl} alt={product.images[0].alt} price={product.price} />
        )
    })
    return(
        <Wrapper>
            {productList}
        </Wrapper>
    )
}

export default Products
