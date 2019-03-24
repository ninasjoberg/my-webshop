import React from 'react';
import styled from 'styled-components'

const ContentWrapper = styled.div`
	background-color: #f5eee8;
	min-height: 100vh;
	padding: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	img {
		width: 500px;
    	height: auto;
		margin-bottom: 50px;
	}
	p {
		max-width: 1000px;
	}
	@media (max-width: 700px) {
        padding: 16px 0 0;
		p {
            padding: 12px 20px 0;
        }
        img {
            width: 100%;
            margin-bottom: 0;
        }
	}
`;


const PageContent = ({ imageArray, texArray }) => {
    return (
        <ContentWrapper>
            {imageArray && imageArray}
            {texArray}
        </ContentWrapper>
    )
}

export default PageContent