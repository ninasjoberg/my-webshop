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
    text-decoration: none;
    cursor: pointer;
`;

const DispalyProduct = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #222;
    letter-spacing: 0.6px;
    font-family: 'nunito_sansextralight';
    font-weight: 200;
    h2 {
        font-sizs: 36px;
        margin-bottom: 0;
    }
`;




const ProductLink = (props) => (
	<ProductWrapper>
		<Link
			as={`/p/${props.slug}`}
            href={`/product?title=${props.title}`}
            passHref
		>
            <DispalyProduct>
                <img src={props.img} alt="product picture" height="400" width="400" />
                <h2>{props.title}</h2>
                <p>{props.price} SEK</p>
            </DispalyProduct>
		</Link>

	</ProductWrapper>
)



export default class Products extends Component {
    render() {
        const productList = this.props.products.map((product) => {
            console.log(product.slug.current)
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
