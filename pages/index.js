import React, { Component } from 'react';
import styled from 'styled-components'

import client from '../cmsApi';
import Products from '../components/Products.js'
import Header from '../components/Header'
import Footer from '../components/Footer'


const Wrapper = styled.div`
    min-height: 100vh;
	display: flex;
	flex-direction: column;
	background-color: #3c3c3c;
`;

class Index extends React.Component {
	static async getInitialProps() {
		const productsQuery = `*[_type == 'product'] {
			_id,
			title,
			slug,
			price,
			"imageUrls": images[0].asset->url
		}`;
		const products = await client.fetch(productsQuery)
		return {
			products
		}
	}

	render() {
		return (
			<Wrapper>
				<Header />
				<Products products={this.props.products}/>
				<Footer />
			</Wrapper>
		)
	}
}

export default Index

