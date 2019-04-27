import React, { Component } from 'react';
import { withRouter } from 'next/router'
import { inject, observer, action, autorun } from 'mobx-react'

import styled from 'styled-components'

import client from '../cmsApi';
import Header from '../components/Header'
import ActionButton from '../components/ActionButton.js'
import Footer from '../components/Footer'



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
        opacity: 0.3
        border: 1px solid grey;
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


@inject('store')
@observer
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bigImage: '',
            selectedVariant: '',
        }
        this.addProductToCart = this.addProductToCart.bind(this);
        this.selectImg = this.selectImg.bind(this);
        this.selectVariant = this.selectVariant.bind(this);
    }

    static async getInitialProps({ query: { title } }) {
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
        return {
            product
        }
    }

    componentDidMount() {
        this.setState({ bigImage: this.props.product.imageUrls[0] })
        if(this.props.product.variants) {
            this.setState({ selectedVariant: this.props.product.variants[0].title })
        }
    }

    addProductToCart(product) {
        const productInfo = {
            id: product._id,
            title: product.title,
            images: product.imageUrls,
            price: product.price,
            quantity: 1,
            variant: this.state.selectedVariant,
        }
        this.props.store.addCart(productInfo)
    }

    selectImg(e) {
        this.setState({ bigImage: e.target.src })

    }

    selectVariant(e) {
        this.setState({ selectedVariant: e.target.value })
    }

    render() {
        const { imageUrls, title, price, body, variants, images } = this.props.product
        const { bigImage } = this.state

        const variant = variants ?
            variants.map((item, index) => {
                return <option key={item._key} selected={index === 0 ? 'selected': ''} value={item.title}>{item.title}</option>
            })
        : ''

        const imageArray = imageUrls.map((imageUrl, key) => {
            const active = imageUrl === this.state.bigImage
            return (
                <SmallImg active={active} src={imageUrl} onClick={this.selectImg} alt={images[key].alt || 'produktbild silversmycke'} height="100" width="100" />
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
                            <BigImage src={bigImage} alt="selected product picture" />
                        </div>
                        <SmallImgWrapper>
                            {imageArray}
                        </SmallImgWrapper>
                        {texArray}
                        <PriceText>{price} SEK</PriceText>
                        {variant &&
                            <Dropdown onChange={this.selectVariant}>
                                {variant}
                            </Dropdown>
                        }
                        <ActionButton buttonText="Lägg till" onClick={() => { this.addProductToCart(this.props.product) }} />
                    </WrapperContent>
                </Wrapper>
                <Footer />
            </React.Fragment>
        )
    }
}

export default withRouter(Product)