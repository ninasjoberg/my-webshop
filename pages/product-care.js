import React, { Component } from 'react';
import { withRouter } from 'next/router'

import client from '../cmsApi';
import Header from '../components/Header'
import PageContent from '../components/PageContent'
import Footer from '../components/Footer'


class productCare extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	static async getInitialProps() {
		const pageQuery = `*[_type == 'page' && title == 'Product care'] {
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

		console.log('imageUrls', imageUrls)

		const texArray = body.map((section) => {
			return <p>{section[0].text}</p>
		})

		const imageArray= imageUrls.map((imageUrl) => {
            return (
                <img src={imageUrl} alt="product picture" height="500" />
            )
        })

		return (
			<React.Fragment>
				<Header />
				<PageContent texArray={texArray} imageArray={imageArray}/>
				<Footer />
			</React.Fragment>
		)
	}
}

export default withRouter(productCare)