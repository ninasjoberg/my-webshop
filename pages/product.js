import React, { Component } from 'react';
import { withRouter } from 'next/router'
import { inject, observer, action, autorun } from 'mobx-react'

import styled from 'styled-components'

import client from '../cmsApi';
import Header from '../components/Header'


const Wrapper = styled.div`
    min-height: 100vh;
    background-color: #f5eee8;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const WrapperContent = styled.div`
    max-width: 750px;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        font-size: 22px;
    }
`;

const SmallImgwrapper = styled.div`
    margin: 1rem;
    display: flex;
    align-items: center;
    img {
        margin: 0.5rem;
    }
`;

const PriceText = styled.p`
    color:  #52d7c3;
`;

const BuyButton = styled.button`
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 18px;
    letter-spacing: 1px;
    cursor: pointer;
    background-color: black;
    color: white;
    :hover {
        opacity: 0.4;
    }
`;


@inject('store')
@observer
class Product extends Component {
    constructor(props) {
        super(props);
        this.addProductToCart = this.addProductToCart.bind(this);
      }

    static async getInitialProps({ query: { title } }) {
        const productQuery = `*[_type == 'product' && slug.current == '${title}'][0] {
			_id,
			title,
			slug,
            price,
            images,
            "imageUrls": images[].asset->url,
            "body": body.se[].children[],
		}`;
        const product = await client.fetch(productQuery)
        return {
            product
        }
    }

    addProductToCart(product) {
        const productInfo = {
            id: product._id,
            title: product.title,
            images: product.imageUrls,
            price: product.price,
            quantity: 1,
        }
        this.props.store.addCart(productInfo)
    }

    render() {
        const { imageUrls, title, price, body } = this.props.product

        const imageArray = imageUrls.map((imageUrl, key) => {
            return (
                key > 0 && <img src={imageUrl} alt="product picture" height="100" width="100" />
            )
        })

        const texArray = body.map((section) => {
            return <p>{section[0].text}</p>
        })

        return (
            <React.Fragment>
                <Header />
                <Wrapper>
                    <WrapperContent>
                        <h2>{title}</h2>
                        <img src={imageUrls[0]} alt="product picture" height="400" width="400" />
                        <SmallImgwrapper>
                            {imageArray}
                        </SmallImgwrapper>
                        {texArray}
                        <PriceText>{price} SEK</PriceText>
                        <BuyButton onClick={() => { this.addProductToCart(this.props.product)}}>
                            <i className="material-icons">shopping_cart</i>
                            Lägg till
                        </BuyButton>
                    </WrapperContent>
                </Wrapper>
            </React.Fragment>
        )
    }
}

export default withRouter(Product)