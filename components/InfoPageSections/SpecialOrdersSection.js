import React from 'react'
import styled from 'styled-components'
import {
	PageWrapper,
	TextHeading,
	TextWrapper,
} from './sharedStyles.js'

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


const SpecialOrdersSection = ({ title, text, images }) => {
    return (
		<PageWrapper flexDirection='row'>
			<ImageWrapper url={images[0].props.src}>
			</ImageWrapper>
			<TextWrapper fullscreenWidth='66%'>
				<TextHeading>
					{title}
				</TextHeading>
				{text}
			</TextWrapper>
		</PageWrapper>
    )
}

export default SpecialOrdersSection