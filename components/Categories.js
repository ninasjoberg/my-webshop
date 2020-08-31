import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	padding: 20px 0px 10px 0px;
	margin: 0 auto;
	@media (max-width: 700px) {
		width: 100vw;
		overflow-x: scroll;
	}
`;

const CategoryButton = styled.button`
	color: #f5eee8;
	font-weight: 100;
	font-size: 14px;
	margin-left: 12px;
	background-color: #3c3c3c;
	border: none;
	padding: 0px;
	cursor: pointer;
	white-space: nowrap;
	${({ selected }) => selected && `
		border-bottom: 2px solid #06d0b2;
	`}
`

const Space = styled.div`
	padding-left: 12px;
`

const Categories = ({ categories, onClick, selectedCategory }) => {
	return (
		<Wrapper>
			{categories.map((category, index) => {
				return <CategoryButton key={index} onClick={() => onClick(category.title)} selected={selectedCategory === category.title}>{category.title}</CategoryButton>
			})}
			<Space />
		</Wrapper>
	)
}

export default Categories

