import React, { Component } from 'react';
import Link from 'next/link'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import { getItemListFromLocalStorage } from '../utils/localStorage'
import CartModal from './CartModal'

const Wrapper = styled.div`
	height: 250px;
	display: flex;
	flex-direction: column;
	padding: 20px 50px;
	background-color: #3c3c3c;
`;

const Cart = styled.button`
	display: flex;
	align-items: center;
	color: white;
	padding: 0 50px;
	background-color: #3c3c3c;
	border: none;
	cursor: pointer;
	i {
		font-size: 40px;
	}
	p {
		font-size: 26px;
	}
`;

const LinkWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const LinkStyle = styled.a`
	color: #1caf99;
	margin: 10px;
	font-size: 26px;
`;

const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h1`
	margin: 20px 0;
	color: #1caf99;
`;

const SubTitle = styled.p`
	color: #f5eee8;
	letter-spacing: 2px;
	font-weight: 300;
	font-size: 24px;
`;



@inject('store')
@observer
class Header extends Component {
	constructor(props) {
        super(props);
        this.state = {
            showCart: false,
        }
		this.onCartClick = this.onCartClick.bind(this);
		this.onCartClose = this.onCartClose.bind(this);
    }

	componentDidMount() {
		const productsInCart = getItemListFromLocalStorage('cartArray')
        this.props.store.setCart(productsInCart)
	}

	onCartClick() {
		this.setState({ showCart: !this.state.showCart })
	}

	onCartClose() {
		this.setState({ showCart: false })
    }

	render() {
		const { store } = this.props
		return (
			<Wrapper>
				<LinkWrapper>
					<div>
						<Link href="/" passHref>
							<LinkStyle>Bell Pepper</LinkStyle>
						</Link>
						<Link href="/about" passHref>
							<LinkStyle>Om</LinkStyle>
						</Link>
						<Link href="/product-care" passHref>
							<LinkStyle>Skötselråd</LinkStyle>
						</Link>
					</div>
					<Cart onClick={() => this.onCartClick()}>
						<i className="material-icons">shopping_cart</i>
						<p>{store.cartCount} produkter</p>
					</Cart>
				</LinkWrapper>
				<TitleWrapper>
					<Title>BELL PEPPER</Title>
					<SubTitle>Handgjorda smycken i 925 sterling silver. Tillverkade i liten skala, av mig Nina Johanna Sjöberg.</SubTitle>
				</TitleWrapper>
				{this.state.showCart &&
					<CartModal onCartClose={this.onCartClose}/>
				}
			</Wrapper>
		)
	}
}

export default Header