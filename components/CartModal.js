import React, { Component } from 'react';
import Link from 'next/link'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'

const CartWrapper = styled.div`
    background-color: #fff;
    position: fixed;
    margin: 20% auto;
    left: 0;
    right: 0;
    max-width: 60%;
    padding: 50px;
    border: 1px solid #dce1e2;
    border-color: #dce1e2;
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.16);
`;

const InfoHeaders = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const Divider = styled.div`
    height: 1px;
    width: 100%;
    background-color: lightgray;
`;

const ItemWrapper = styled.div`
    display: flex;
    margin: 20px 0;
    p {
        flex-basis: 25%;

    }
`;

const ProductInfoWrapper = styled.div`
    display: flex;
    flex-basis: 50%;
    img {
        padding-right: 20px;
    }
`;

const ItemText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
class CartModal extends Component {
    render() {
        const productArray = this.props.store.cart.map((item) => {
            return  (
                <ProductInfo>
                    <Divider />
                        <ItemWrapper>
                            <ProductInfoWrapper>
                                <img src={item.images[0]} alt="product picture" height="60" width="60" />
                                <ItemText>
                                    <p>{item.title}</p>
                                    <p>{item.variants}</p>
                                    <p>{item.price}</p>
                                </ItemText>
                            </ProductInfoWrapper>
                            <p>{item.quantity}</p>
                            <p>{item.price * item.quantity}</p>
                        </ItemWrapper>

                </ProductInfo>
            )
        })

        const price = this.props.store.cart.map((item) => {
            return item.price * item.quantity
        }).reduce((item, currentValue) => {
            return item + currentValue
        });

        return (
            <CartWrapper>
                <h2>HÄR ÄR DIN VARUKORG</h2>
                <InfoHeaders>
                    <p>product</p>
                    <p>Antal</p>
                    <p>Pris</p>
                </InfoHeaders>
                {productArray}
                <p>totalt: {price} sek</p>
                <BuyButton onClick={() => {}}>
                    <i className="material-icons">shopping_cart</i>
                    Till kassan
                </BuyButton>
            </CartWrapper>
        )
    }
}

export default CartModal