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
        h3, p {
            font-size: 12px;
            margin: 0;
        }
        img {
            height: 100%;
            width: 100%;
            margin-bottom: 8px;
        }
    }
`;

const DispalyProduct = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #51616a;
    letter-spacing: 0.6px;
    font-weight: 200;
`;




const ProductLink = (props) => (
	<ProductWrapper>
		<Link
			as={`/p/${props.slug}`}
            href={`/product?title=${props.slug}`}
            passHref
		>
            <DispalyProduct>
                <img src={props.img} alt="product picture" height="300" width="300" />
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
                <ProductLink key={product._id} id={product._id} title={product.title} slug={product.slug.current} img={product.imageUrls} price={product.price} />
            )
        })
        return(
            <Wrapper>
                {productList}
            </Wrapper>
        )
    }
}
