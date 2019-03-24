import React, { Component } from 'react';
import { withRouter } from 'next/router'
import styled from 'styled-components'

import client from '../cmsApi';
import Header from '../components/Header'


const ContentWrapper = styled.div`
	background-color: #f5eee8;
	min-height: 100vh;
	padding: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	p {
		max-width: 1000px;
	}
`;


class productCare extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	static async getInitialProps() {
		const pageQuery = `*[_type == 'page' && title == 'Product care'] {
			"body": body.se[].children[],
		}`;
		const pageInfo = await client.fetch(pageQuery)
		return {
			pageInfo
		}
	}

	render() {
		const { body } = this.props.pageInfo[0]

		const texArray = body.map((section) => {
			return <p>{section[0].text}</p>
		})

		return (
			<React.Fragment>
				<Header />
				<ContentWrapper>
					<p>Skötselråd</p>
					{texArray}
				</ContentWrapper>
			</React.Fragment>
		)
	}
}

export default withRouter(productCare)