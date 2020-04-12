import React, { Component } from 'react';
import { withRouter } from 'next/router'

import client from '../cmsApi';
import Header from '../components/Header'
import PageContent from '../components/PageContent'
import Footer from '../components/Footer'


class productCare extends Component {
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

		const texArray = body.map((section) => {
			return <p key={section[0]._key}>{section[0].text}</p>
		})

		const imageArray= imageUrls.map((imageUrl, index) => {
            return (
                <img key={index} src={imageUrl} alt="product picture" height="500" />
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