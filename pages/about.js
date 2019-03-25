import React, { Component } from 'react';
import { withRouter } from 'next/router'

import client from '../cmsApi';
import Header from '../components/Header'
import PageContent from '../components/PageContent'


class about extends Component {
	constructor(props) {
		super(props);
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

		const imageArray = imageUrls.map((imageUrl) => {
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
				<PageContent imageArray={imageArray} texArray={texArray} />
			</React.Fragment>
		)
	}
}

export default withRouter(about)