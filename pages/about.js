import React, { Component } from 'react';

import client from '../cmsApi';
import Header from '../components/Header'
import PageContent from '../components/PageContent'
import Footer from '../components/Footer'


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

		const imageArray = imageUrls.map((imageUrl, index) => {
            return (
                <img key={index} src={imageUrl} alt="product picture" height="500" />
            )
        })

		const texArray = body.map((section) => {
            return <p key={section[0]._key}>{section[0].text}</p>
        })

		return (
			<React.Fragment>
				<Header />
				<PageContent imageArray={imageArray} texArray={texArray} />
				<Footer />
			</React.Fragment>
		)
	}
}

export default about