import React, { Component } from 'react';
import Link from 'next/link'
import styled from 'styled-components'


const Wrapper = styled.ul`
    background-color: #3c3c3c;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
`;

const ProductWrapper = styled.li`
    background-color: #f5eee8;
    padding: 1rem;
    margin: 1rem;
`;

const DispalyProduct = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #222;
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
                <img src={props.img} alt="product picture" height="400" width="400" />
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
                <ProductLink id={product._id} title={product.title} slug={product.slug.current} img={product.imageUrls} price={product.price} />
            )
        })
        return(
            <Wrapper>
                {productList}
            </Wrapper>
        )
    }
}
