import React, { Component } from 'react';
import { withRouter } from 'next/router'
import styled from 'styled-components'

import client from '../cmsApi';
import Header from '../components/Header'


const Wrapper = styled.div`

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

		console.log('body', body)
		return (
			<React.Fragment>
				<Wrapper>
					<div>
						<Header />
						<p>Skötselråd</p>
						{texArray}
					</div>
				</Wrapper>
			</React.Fragment>
		)
	}
}

export default withRouter(productCare)