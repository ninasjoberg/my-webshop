import React from 'react';
import styled from 'styled-components'

const PageWrapper = styled.div`
	background-color: #eed2c4;
	width: 100%;
	display: flex;
    justify-content: center;
    max-width: 1800px;
`

const TextWrapper = styled.div`
	width: 100%;
	max-width: 800px;
	padding: 20px;
	text-align: left;
    @media (min-width: 1310px) {
		padding: 50px;
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

const ProductCareSection = ({ title, text }) => {
    return (
		<PageWrapper>
			<TextWrapper>
				<TextHeading>
					{title}
				</TextHeading>
				{text}
			</TextWrapper>
		</PageWrapper>
    )
}

export default ProductCareSection