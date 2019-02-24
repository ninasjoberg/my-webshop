import React, { Component } from 'react';
import Link from 'next/link'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import { getItemListFromLocalStorage } from '../utils/localStorage'


const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	background-color: #3c3c3c;
`;

const Cart = styled.div`
	display: flex;
	align-items: center;
	color: white;
	padding: 0 50px;
`;

const LinkWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const LinkStyle = styled.a`
	color: #1caf99;
	margin: 5px;
`;

const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h1`
	margin: 20px 0 0;
	color: #1caf99;
`;

const SubTitle = styled.p`
	color: #f5eee8;
	letter-spacing: 2px;
	font-weight: 300;
`;

@inject('store')
@observer
class Header extends Component {

	componentDidMount() {
		const productsInCart = getItemListFromLocalStorage('cartArray')
        this.props.store.setCart(productsInCart)
    }

	render() {
		const { store } = this.props
		return (
			<Wrapper>
				<LinkWrapper>
					<Cart>
						<i class="material-icons">shopping_cart</i>
						<p>{store.cartCount}</p>
					</Cart>
					<Link href="/" passHref>
						<LinkStyle>Bell Pepper</LinkStyle>
					</Link>
					<Link href="/about" passHref>
						<LinkStyle>Om</LinkStyle>
					</Link>
					<Link href="/product-care" passHref>
						<LinkStyle>Skötselråd</LinkStyle>
					</Link>
				</LinkWrapper>
				<TitleWrapper>
					<Title>BELL PEPPER</Title>
					<SubTitle>925 STERLING SILVER, HANDMADE BY NINA SJÖBERG</SubTitle>
				</TitleWrapper>
			</Wrapper>
		)
	}
}

export default Header