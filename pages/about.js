import React, { Component } from 'react';
import { withRouter } from 'next/router'
import styled from 'styled-components'

import client from '../cmsApi';
import Header from '../components/Header'


const Wrapper = styled.div`

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
				<Wrapper>
					<div>
						<Header />
						<p>This is the about page</p>
						{imageArray}
						{texArray}
					</div>
				</Wrapper>
			</React.Fragment>
		)
	}
}

export default withRouter(about)