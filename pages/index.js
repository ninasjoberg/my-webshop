import React, { Component } from 'react';
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'

import client from '../cmsApi';
import Products from '../components/Products.js'
import Header from '../components/Header'


const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;



class Index extends Component {

	static async getInitialProps() {
		const productQuery = `*[_type == 'product'] {
			_id,
			title,
			slug,
			price,
			"imageUrls": images[0].asset->url
		}`;
		const prod = await client.fetch(productQuery)
		return {
			prod
		}
	  }

	render() {
		console.log('PROPS', this.props.prod)
		return (
			<Wrapper>
				<Header />
				<Products products={this.props.prod}/>
			</Wrapper>
		)
	}
}


export default Index

