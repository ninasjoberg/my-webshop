import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import 'isomorphic-fetch'

import AddressForm from './AddressForm.js'
import ActionButton from './ActionButton.js'

const CartWrapper = styled.div`
    background-color: #fff;
    position: fixed;
    right: 40px;
    width: 500px;
    max-height: 80vh;
    overflow-x: scroll;
    padding: 50px;
    border: 1px solid #dce1e2;
    border-color: #dce1e2;
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.16);
    display: flex;
    flex-direction: column;
    z-index: 1;
    @media (max-width: 700px) {
        left: 50%;
        transform: translate(-50%, 0);
        width: 95%;
        padding: 20px 20px 60px;
        max-height: 100vh;
    }
`;

const CloseButton = styled.button`
    display: flex;
    align-self: flex-end;
    width: 20px;
    border: none;
    cursor: pointer;
    padding: 0;
    background-color: white;
    :hover {
        opacity: 0.4;
    }
    i {
        font-size: 24px;
    }
`;

const InfoHeaders = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const RemoveButton = styled.button`
    display: flex;
    justify-content: center;
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 50%;
    background-color: #f5eee8;
    color: #51616a;
    cursor: pointer;
    :hover {
        opacity: 0.4;
    }
    i {
        font-size: 16px;
    }
`;

const Divider = styled.div`
    height: 1px;
    width: 100%;
    background-color: lightgray;
`;

const ItemWrapper = styled.div`
    display: flex;
    margin: 20px 0;
    align-items: center;
    justify-content: space-between;
`;

const ProductInfoWrapper = styled.div`
    display: flex;
    flex-basis: 50%;
    align-items: center;
    img {
        width: auto;
        padding-right: 20px;
    }
    @media (max-width: 700px) {
        p {
            text-align: left;
            font-size: 14px;
        }
        img {
            padding-right: 10px;
        }
    }
`;

const QuantityWrapper = styled.div`
    display: flex;
    flex-basis: 25%;
    p {
        display: flex;
        margin-right: 25px;
        text-align: right;
    }
`;

const PriceTag = styled.p`
    display: flex;
    flex-basis: 25%;
    justify-content: flex-end;
`;

const ItemText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const TotalCost = styled.p`
    text-align: right;
    font-weight: bold;
    padding: 10px 0;
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
            errorText: '',
            submitted: false,
        }
        this.addAddressClick = this.addAddressClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.removeProductFromCart = this.removeProductFromCart.bind(this);
    }

    removeProductFromCart(item) {
        const productInfo = {
            id: item.id,
            variant: item.variant,
        }
        this.props.store.removeFromCart(productInfo)
    }

    addAddressClick() {
        this.setState({ showAddressForm: true })
    }

    onChange(e) {
        this.setState({errorText: ''})
        this.setState({ userInformation: { ...this.state.userInformation, [e.target.name]: e.target.value } })
    }

    onSubmit() {
        if (Object.values(this.state.userInformation).includes('')) {
            this.setState({errorText: 'Du måste fylla i adress och email.'})
            return
        }
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
        this.props.onCartClose()
    }

    render() {
        const { showAddressForm } = this.state
        const { store, onCartClose } = this.props

        const productArray = store.cart.map((item) => {
            console.log(item.id)
            if(item.images) {
                return (
                    <ProductInfo key={item._id}>
                        <ItemWrapper>
                            <ProductInfoWrapper>
                                <img src={item.images[0]} alt="product picture" height="60" width="60" />
                                <ItemText>
                                    <p>{item.title}</p>
                                    <p>{item.variant}</p>
                                    <p>{item.price}</p>
                                </ItemText>
                            </ProductInfoWrapper>
                            <QuantityWrapper>
                                <p>{item.quantity} st</p>
                                <RemoveButton onClick={() => this.removeProductFromCart(item)}>
                                    <i className="material-icons">close</i>
                                </RemoveButton>
                            </QuantityWrapper>
                            <PriceTag>{item.price * item.quantity} kr</PriceTag>
                        </ItemWrapper>
                        <Divider />
                    </ProductInfo>
                )
            }
            else return null
        })

        const price = store.cart.map((item) => {
            return item.price * item.quantity
        }).reduce((item, currentValue) => {
            return item + currentValue
        }, 0);

        return (
            <CartWrapper>
                <CloseButton onClick={onCartClose}>
                    <i className="material-icons">close</i>
                </CloseButton>
                <h2>HÄR ÄR DIN VARUKORG</h2>
                <div>
                    <InfoHeaders>
                        <p>Produkt</p>
                        <p>Antal</p>
                        <p>Pris</p>
                    </InfoHeaders>
                    <Divider />
                    {productArray}
                    <TotalCost>totalt: {price} sek</TotalCost>
                    <Divider />
                </div>
                <div>
                    <ActionButton buttonText="Leveransadress" onClick={() => { this.addAddressClick() }}/>
                </div>
                {showAddressForm &&
                    <AddressForm {...this.state} handleChange={this.onChange} handleSubmit={this.onSubmit} />
                }
            </CartWrapper>
        )
    }
}

export default CartModal