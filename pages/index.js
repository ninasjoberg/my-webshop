import React, { Component } from 'react';
import styled from 'styled-components'

import Products from '../components/Products.js'
import Header from '../components/Header'


const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;



class Index extends Component {

	render() {
		return (
			<Wrapper>
				<Header />
				<Products />
			</Wrapper>
		)
	}
}

export default Index
