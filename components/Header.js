import Link from 'next/link'
import styled, { css } from 'styled-components'


const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	background-color: #3c3c3c;
`;

const LinkWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const LinkStyle = styled.a`
	color: #1caf99;
	margin: 5px;
`;

const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h1`
	margin: 20px 0 0;
	color: #1caf99;
`;

const SubTitle = styled.p`
	color: #f5eee8;
	letter-spacing: 2px;
	font-weight: 300;
`;



const Header = () => (
	<Wrapper>
		<LinkWrapper>
			<Link href="/" passHref>
				<LinkStyle>HOME</LinkStyle>
			</Link>
			<Link href="/about">
				<LinkStyle>ABOUT</LinkStyle>
			</Link>
		</LinkWrapper>
		<TitleWrapper>
			<Title>BELL PEPPER</Title>
			<SubTitle>925 STERLING SILVER, HANDMADE BY NINA SJÖBERG</SubTitle>
		</TitleWrapper>
	</Wrapper>
)

export default Header