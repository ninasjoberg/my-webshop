import React, { Component } from 'react';
import { withRouter } from 'next/router'

import client from '../cmsApi';
import Header from '../components/Header'
import PageContent from '../components/PageContent'


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
				<PageContent texArray={texArray} />
			</React.Fragment>
		)
	}
}

export default withRouter(productCare)