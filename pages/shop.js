import React, { Component } from 'react';
import styled from 'styled-components'

import client from '../cmsApi';
import Header from '../components/Header'
import Products from '../components/Products.js'
import Categories from '../components/Categories'
import Footer from '../components/Footer'


const Wrapper = styled.div`
    min-height: 100vh;
	display: flex;
	flex-direction: column;
	background-color: #3c3c3c;
`;

class Shop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedCategory: 'Alla produkter',
		}
		this.handleCategoryClick = this.handleCategoryClick.bind(this);
	}

	static async getInitialProps() {
		const productsQuery = `*[_type == 'product'] | order(order asc) {
			_id,
			title,
			slug,
			images,
			price,
			"firstImageUrl": images[0].asset->url,
			"categories": categories[]->title,
		}`;
		const products = await client.fetch(productsQuery)

		const categoryQuery = `*[_type == 'category'] {
			title,
		}`;
		const categories = await client.fetch(categoryQuery)
		categories.unshift({title: 'Alla produkter'} )

		return {
			products, categories
		}
	}

	handleCategoryClick(title) {
		this.setState({selectedCategory: title})
	}

	render() {
		return (
			<Wrapper>
				<Header />
				<Categories categories={this.props.categories} onClick={this.handleCategoryClick} selectedCategory={this.state.selectedCategory}/>
				<Products products={this.props.products} selectedCategory={this.state.selectedCategory}/>
				<Footer />
			</Wrapper>
		)
	}
}

export default Shop