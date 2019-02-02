import Link from 'next/link'
import styled, { css } from 'styled-components'


const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	font-family: helvetica;
`;

const LinkWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const LinkStyle = styled.a`
	color: #1caf99;
	font-family: helvetica;
	font-size: 20px;
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
	font-size: 40px;
`;

const SubTitle = styled.p`
	font-size: 20px;
	color: #252c30;
	letter-spacing: 2px;
	font-weight: 300;
`;



const Header = () => (
	<Wrapper>
		<LinkWrapper>
			<Link href="/">
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