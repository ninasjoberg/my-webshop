import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import 'isomorphic-fetch'

import AddressForm from './AddressForm.js'

const CartWrapper = styled.div`
    background-color: #fff;
    position: fixed;
    margin: 40px auto;
    left: 0;
    right: 0;
    max-width: 650px;
    max-height: 80vh;
    overflow-x: scroll;
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
        text-align: right;
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

const TotalCost = styled.p`
    text-align: right;
    font-weight: bold;
`;

const BuyButton = styled.button`
    width: 200px;
    height: 50px;
    margin-top: 20px;
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
    constructor(props) {
        super(props);
        this.state = {
            showAddressForm: false,
            userInformation: {
                name: '',
                street: '',
                zipcode: '',
                city: '',
                email: '',
            },
            submitted: false,
        }
        this.addAddressClick = this.addAddressClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    addAddressClick() {
        this.setState({ showAddressForm: true })
    }

    onChange(e) {
        this.setState({ userInformation: { ...this.state.userInformation, [e.target.name]: e.target.value } })
    }

    onSubmit() {
        const body = {
            userInfo: this.state.userInformation,
            order: this.props.store.cart,
        }

        fetch('/api/address', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        }).then((res) => {
            res.status === 200 ? this.setState({ submitted: true }) : ''
        })
    }

    render() {
        const { showAddressForm } = this.state
        const productArray = this.props.store.cart.map((item) => {
            return (
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
                <TotalCost>totalt: {price} sek</TotalCost>
                <Divider />
                <BuyButton onClick={() => { this.addAddressClick() }}>
                    Leveransadress
                </BuyButton>
                {showAddressForm &&
                    <AddressForm {...this.state} handleChange={this.onChange} handleSubmit={this.onSubmit} />
                }
            </CartWrapper>
        )
    }
}

export default CartModal