import React, { Component } from 'react';
import styled from 'styled-components'
import Link from 'next/link'
import client from '../cmsApi';
import Header from '../components/Header'
import Footer from '../components/Footer'


const Wrapper = styled.div`
    min-height: 100vh;
	display: flex;
	flex-direction: column;
	background-color: #3c3c3c;
`;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	border-top: 1px solid #c7c7c7;
	width: 100%;
	max-width: 1000px;
	margin: 0 auto;
	${({ style }) => style === 1 && `
		margin: 0 auto;
	`}
	${({ style }) => style === 2 && `
		flex-direction: row;
		background-color: #f5eee8;
		@media (max-width: 700px) {
			flex-direction: column;
		}
	`}
	${({ style }) => style === 3 && `
		background-color: #f5eee8;
		flex-flow: column-reverse;
	`}
	${({ style }) => style === 4 && `
		background-color: #f5eee8;

	`}
`

const ImageDiv = styled.div`
	padding-right: 10px;
	display: flex;
	max-width: 100%;
	img {
		padding-bottom: 12px;
		height: 400px;
		width: auto;
	}
	${({ style }) => style === 1 && `
		margin: 0 auto;
		overflow-x: scroll;
		width: 100vw;
		justify-content: center;
		cursor: pointer;
		img {
			margin-right: 10px;
			height: 250px;
			&:last-child {
				margin-right: 0px;
			}
			@media (max-width: 700px) {
				height: 150px;
			}
		}
		@media (max-width: 1200px) {
			justify-content: start;
		}
	`}
	${({ style }) => style === 2 && `
		flex-direction: column;
		img {
			height: 350px;
		}
		@media (max-width: 700px) {
			flex-direction: row;
			overflow-x: scroll;
			width: 100vw;
			img {
				margin-right: 10px;
				height: 250px;
				&:last-child {
					margin-right: 0px;
   				}
			}
		}
	`}
	${({ style }) => style === 3 && `
		flex-flow: row wrap;
		padding-right: 0px;
		margin-top: 10px;
		img {
			margin-right: 10px;
			height: 200px;
		}
		@media (max-width: 700px) {
			flex-flow: row;
			overflow-x: scroll;
			width: 100vw;
		}
	`}
`

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	padding-left: 10px;
	@media (max-width: 700px) {
		padding-left: 0px;
	}
`

const TextHeading = styled.h2`
	font-size: 24px;
	font-weight: 100;
	margin: 0px;
`

const Text = styled.div`
	p {
		font-size: 14px;
		font-weight: 100;
		letter-spacing: 2px;
		text-align: left;
		width: 100%;
		padding-bottom: 10px;
	}
	h3 {
		font-size: 18px;
    	font-weight: 100;
	}
`


class Index extends Component {
	constructor(props) {
		super(props);
	}

	static async getInitialProps() {
		const pageQuery = `*[_type == 'startPage'] {
			title,
			order,
			images,
			"imageUrls": images[].asset->url,
            "body": body.se[].children[],
		}`;
		const pageInfo = await client.fetch(pageQuery)
		return {
			pageInfo
		}
	}

	render() {
		const { pageInfo } = this.props
		const sortedArray = pageInfo.sort((a, b) => {
			return a.order-b.order
		})

		const pageContent = sortedArray.map((section) => {
			const firstSection = section.order === 1

			const imageArray = section.imageUrls ? section.imageUrls.map((imageUrl, index) => {
				return (
					<>
						{firstSection ?
							<Link
								as={`/products`}
								href={`/products`}
								passHref
							>
								<img key={index} src={imageUrl} height="100" width="100" />
							</Link>
						:
							<img key={index} src={imageUrl} height="100" width="100" />
						}
					</>
				)
			}) : ''

			const textArray = section.body ? section.body.map((section) => {
				return <p key={section[0]._key}>{section[0].text}</p>
			}) : ''

			return (
				<>
					{firstSection ?
						<ImageDiv style={section.order}>{imageArray}</ImageDiv>
					:
						<ContentWrapper style={section.order}>
							<ImageDiv style={section.order}>{imageArray}</ImageDiv>
							<TextWrapper>
								{section.title && <TextHeading>{section.title}</TextHeading>}
								{textArray && <Text>{textArray}</Text>}
							</TextWrapper>
						</ContentWrapper>
					}
				</>
			)
		})

		return (
			<Wrapper>
				<Header />
					{pageContent}
				<Footer />
			</Wrapper>
		)
	}
}

export default Index

