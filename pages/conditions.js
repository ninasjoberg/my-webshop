import React, { Component } from 'react'

import client from '../cmsApi'
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
		const pageQuery = `*[_type == 'page' && title == 'Conditions'] {
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
			return <p key={section[0]._key}>{section[0].text}</p>
		})

		return (
			<React.Fragment>
				<Header />
				<PageContent texArray={texArray} />
				<Footer />
			</React.Fragment>
		)
	}
}

export default productCare