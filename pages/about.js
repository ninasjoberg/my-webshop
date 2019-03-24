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
	img {
		width: 500px;
    	height: auto;
		margin-bottom: 50px;
	}
	p {
		max-width: 1000px;
	}
`;



class about extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	static async getInitialProps() {
		const pageQuery = `*[_type == 'page' && title == 'About'] {
			"body": body.se[].children[],
			"imageUrls": images[].asset->url,
		}`;
		const pageInfo = await client.fetch(pageQuery)
		return {
			pageInfo
		}
	}

	render() {
		const { body, imageUrls } = this.props.pageInfo[0]

		const imageArray = imageUrls.map((imageUrl, key) => {
            return (
                <img src={imageUrl} alt="product picture" height="500" />
            )
        })

		const texArray = body.map((section) => {
            return <p>{section[0].text}</p>
        })

		return (
			<React.Fragment>
				<Header />
				<ContentWrapper>
					{imageArray}
					{texArray}
				</ContentWrapper>
			</React.Fragment>
		)
	}
}

export default withRouter(about)