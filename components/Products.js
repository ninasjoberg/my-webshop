import React, { Component } from 'react';
import Link from 'next/link'
import styled from 'styled-components'


const Wrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ProductWrapper = styled.li`
    background-color: #f5eee8;
    padding: 12px;
    margin: 12px;
    @media (max-width: 700px) {
        width: 45%;
        padding: 0 0 6px;
        margin: 6px;
    }
`;

const DispalyProduct = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #51616a;
    letter-spacing: 0.6px;
    font-weight: 200;
    @media (max-width: 700px) {
        h3, p {
            font-size: 12px;
            margin: 0;
        }
        img {
            max-width: 100%;
            height: auto;
            margin-bottom: 8px;
        }
    }
`;




const ProductLink = (props) => (
	<ProductWrapper>
		<Link
			as={`/product/${props.slug}`}
            href={`/product?title=${props.slug}`}
            passHref
		>
            <DispalyProduct>
                <img src={props.img} alt={props.alt || 'produktbild silversmycke'} height="300px" width="300px" />
                <h3>{props.title}</h3>
                <p>{props.price} SEK</p>
            </DispalyProduct>
		</Link>
	</ProductWrapper>
)



export default class Products extends Component {
    render() {
        const productList = this.props.products.map((product) => {
            return (
                <ProductLink key={product._id} id={product._id} title={product.title} slug={product.slug.current} img={product.firstImageUrl} alt={product.images[0].alt} price={product.price} />
            )
        })
        return(
            <Wrapper>
                {productList}
            </Wrapper>
        )
    }
}
