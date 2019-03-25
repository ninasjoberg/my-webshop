import React, { Component } from 'react';
import { withRouter } from 'next/router'
import { inject, observer, action, autorun } from 'mobx-react'

import styled from 'styled-components'

import client from '../cmsApi';
import Header from '../components/Header'
import ActionButton from '../components/ActionButton.js'


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #3c3c3c;
`;

const WrapperContent = styled.div`
    max-width: 800px;
    padding: 25px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5eee8;
    margin: 32px 0;
    text-align: left;
    @media (max-width: 700px) {
        padding: 25px;
        p {
            font-weight: 200;
            margin-bottom: 6px;
        }
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
    img {
        margin: 16px 12px 0px 0px;
        cursor: pointer;
        &:last-child {
            margin-right: 0px;
        }
    }
`;

const PriceText = styled.p`
    color:  #06d0b2;
    margin-top: 20px;
`;


@inject('store')
@observer
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bigImage: '',
		}
        this.addProductToCart = this.addProductToCart.bind(this);
        this.selectImg = this.selectImg.bind(this);
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

    componentDidMount() {
        this.setState({ bigImage: this.props.product.imageUrls[0] })
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

    selectImg(e) {
        this.setState({ bigImage: e.target.src })
    }

    render() {
        const { imageUrls, title, price, body } = this.props.product
        const { bigImage } = this.state

        const imageArray = imageUrls.map((imageUrl, key) => {
            return (
                <img src={imageUrl} onClick={this.selectImg} alt="product picture" height="100" width="100" />
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
                        <div>
                            <BigImage src={bigImage} alt="product picture" />
                        </div>
                        <SmallImgWrapper>
                            {imageArray}
                        </SmallImgWrapper>
                        {texArray}
                        <PriceText>{price} SEK</PriceText>
                        <ActionButton buttonText="Lägg till"  onClick={() => { this.addProductToCart(this.props.product)}} />
                    </WrapperContent>
                </Wrapper>
            </React.Fragment>
        )
    }
}

export default withRouter(Product)