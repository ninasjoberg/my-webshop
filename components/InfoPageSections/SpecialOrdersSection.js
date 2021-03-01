import React from 'react'
import styled from 'styled-components'


const PageWrapper = styled.div`
	background-color: #f5eee8;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 1800px;
	@media (min-width: 1310px) {
        flex-direction: row;
		align-items: start;
    }
`

const ImageWrapper = styled.div`
	width: 100%;
	height: 375px;
	${({ url }) => url && `
		background-image: url(${url});
	`}
	background-position: 50% 50%;
	background-size: cover;
	@media (min-width: 800px) {
		width: 80%;
		height: 500px;
    }
	@media (min-width: 1310px) {
		width: 34%;
		height: 600px;
    }
`

const TextWrapper = styled.div`
	width: 100%;
	max-width: 800px;
	padding: 20px;
    text-align: left;
	@media (min-width: 1310px) {
		width: 66%;
		padding: 50px;
		max-width: none;
    }
	p {
		margin-bottom: 12px;
	}
`

const TextHeading = styled.h2`
	font-size: 24px;
	font-weight: 100;
	margin: 0px 0px 24px;
`


const SpecialOrdersSection = ({ title, text, images }) => {
    return (
		<PageWrapper>
			<ImageWrapper url={images[0].props.src}>
			</ImageWrapper>
			<TextWrapper>
				<TextHeading>
					{title}
				</TextHeading>
				{text}
			</TextWrapper>
		</PageWrapper>
    )
}

export default SpecialOrdersSection