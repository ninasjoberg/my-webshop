import React from 'react';
import styled from 'styled-components'
import client from '../cmsApi';
import Header from '../components/Header'
import Footer from '../components/Footer'
import ImageCarouselManual from '../components/ImageCarouselManual'

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
	position: relative;
	${({ order }) => order === 1 && `
		flex-direction: row;
		background-color: #f5eee8;
		@media (max-width: 700px) {
			flex-direction: column;
		}
	`}
	${({ order }) => order === 2 && `
		background-color: #f5eee8;
		flex-flow: column-reverse;
	`}
	${({ order }) => order === 3 && `
		background-color: #f5eee8;

	`}
`

const ImageDiv = styled.div`
	padding-right: 10px;
	display: flex;
	max-width: 100%;
	scroll-behavior: smooth;
	img {
		padding-bottom: 12px;
		height: 400px;
		width: auto;
	}

	${({ order }) => order === 1 && `
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
		@media (max-width: 700px) {
            font-weight: normal;
        }
    }
	}
	h3 {
		font-size: 18px;
    	font-weight: 100;
	}
`


const Index = (props)  => {
	const { pageInfo } = props
	const sortedArray = pageInfo.sort((a, b) => {
		return a.order-b.order
	})

	const pageContent = sortedArray.map((section) => {
		const firstSection = section.order === 0

		const imageArray = section.imageUrls ? section.imageUrls.map((imageUrl, index) => {
			const elementId = index === 0 ? 'observe' : ''
			return (
				<img key={index} id={elementId} src={imageUrl} height="100" width="100" />
			)
		}) : ''

		const textArray = section.body ? section.body.map((section) => {
			return <p key={section[0]._key}>{section[0].text}</p>
		}) : ''

		console.log(textArray)

		return (
			<>
				{firstSection ?
					<ImageCarouselManual imageArray={imageArray} order={section.order}/>
				:
					<ContentWrapper order={section.order}>
						{section.order === 2 ?
							<ImageCarouselManual imageArray={imageArray} order={section.order} />
							:
							<ImageDiv order={section.order}>
								{imageArray}
							</ImageDiv>
						}
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


Index.getInitialProps = async() => {
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

export default Index

