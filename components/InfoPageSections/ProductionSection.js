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
        flex-direction: row-reverse;
		align-items: start;
    }
`

const ImagesDiv = styled.div`
	display: flex;
	width: 100%;
	height: 255px;
	@media (min-width: 800px) {
		width: 80%;
		height: 400px;
    }
	@media (min-width: 1310px) {
		width: 66%;
		height: 400px;
    }
`

const ImageWrapper = styled.div`
	width: 100%;
	${({ url }) => url && `
		background-image: url(${url});
	`}
	background-position: 50% 50%;
	background-size: cover;
`

const TextWrapper = styled.div`
	width: 100%;
	max-width: 800px;
    text-align: left;
	padding: 20px;
	@media (min-width: 1310px) {
		width: 34%;
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

const ProductionSection =  ({ title, text, images }) => {
    return (
		<PageWrapper>
			{images &&
				<ImagesDiv>
					<ImageWrapper url={images[0].props.src} />
					<ImageWrapper url={images[1].props.src} />
				</ImagesDiv>
			}
			<TextWrapper>
				<TextHeading>
					{title}
				</TextHeading>
				{text}
			</TextWrapper>
		</PageWrapper>
    )
}

export default ProductionSection