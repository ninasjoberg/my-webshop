import React, { Component } from 'react';
import { withRouter } from 'next/router'
import Link from 'next/link'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import { getItemListFromLocalStorage } from '../utils/localStorage'
import CartModal from './CartModal'


const TopHeader = styled.div`
	position: fixed;
	z-index: 1;
	top: 0;
	background-color: #3c3c3c;
	width: 100%;
`;

const LinkWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-flow: wrap;
	padding: 10px;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px 50px;
	background-color: #3c3c3c;
	margin-top: 40px;
	@media (max-width: 700px) {
		padding: 12px;
	}
`;

const Cart = styled.button`
	display: flex;
	align-items: center;
	color: #f5eee8;
	background-color: #3c3c3c;
	border: none;
	cursor: pointer;
	p {
		font-size: 16px;
		font-weight: 100;
		color: #06d0b2;
		margin-left: 4px;
	}
	@media (max-width: 700px) {
		p, i {
			font-size: 12px;
		}
	}
`;

const LinkStyle = styled.a`
	color: #f5eee8;
	margin: 6px;
	font-weight: 100;
	@media (max-width: 700px) {
		font-size: 12px;
	}

	${({ active }) => active && `
		color: #06d0b2;
	`}
`;

const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h1`
	color: #06d0b2;
	@media (max-width: 700px) {
		margin: 6px;
	}
`;

const SubTitle = styled.p`
	color: #f5eee8;
	letter-spacing: 2px;
	font-weight: 100;
	@media (max-width: 700px) {
		font-size: 12px;
	}
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
		const { store, router: { asPath = '/' } = {} } = this.props


		return (
			<React.Fragment>
				<TopHeader>
					<LinkWrapper>
						<div>
							<Link href="/" passHref>
								<LinkStyle active={asPath === '/'}>Bell Pepper</LinkStyle>
							</Link>
							<Link href="/about" passHref>
								<LinkStyle active={asPath === '/about'}>Om</LinkStyle>
							</Link>
							<Link href="/product-care" passHref>
								<LinkStyle active={asPath === '/product-care'}>Skötselråd</LinkStyle>
							</Link>
							<Link href="/conditions" passHref>
								<LinkStyle active={asPath === '/conditions'}>Köpvillkor</LinkStyle>
							</Link>
						</div>
						<Cart onClick={() => this.onCartClick()}>
							<i className="material-icons">shopping_cart</i>
							<p>{store.cartCount}</p>
						</Cart>
					</LinkWrapper>
				</TopHeader>
				<Wrapper>

					<TitleWrapper>
						<Title>BELL PEPPER</Title>
						<SubTitle>Handgjorda smycken i 925 sterling silver. Tillverkade i liten skala, av mig Nina Johanna Sjöberg.</SubTitle>
					</TitleWrapper>
					{this.state.showCart &&
						<CartModal onCartClose={this.onCartClose} />
					}
				</Wrapper>
			</React.Fragment>
		)
	}
}

export default withRouter(Header)