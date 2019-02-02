import Link from 'next/link'
import styled, { css } from 'styled-components'


const ProductWrapper = styled.li`
    background-color: #f5eee8;
    padding: 1rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
`;

const ProducLink = styled.a`
    color: #222;
    font-family: 'nunito_sansextralight';
    font-weight: 200;
    font-size: 1.2rem;
    letter-spacing: 0.6px;
`;

const Wrapper = styled.div`
    background-color: #f5eee8;
    padding: 1rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
`;


const ProductLink = (props) => (
	<ProductWrapper>
		<Link
			as={`/p/${props.id}`}
			href={`/product?title=${props.title}`}
		>
			<ProducLink>{props.title}</ProducLink>
		</Link>
	</ProductWrapper>
)



const Products = (props) => (
    <Wrapper>
        <ul>
            <ProductLink id="silverring" title="silver ring" />
            <ProductLink id="blackdot" title="BLACK DOT" />
            <ProductLink id="oxidizedbowl" title="OXIDIZED BOWL" />
        </ul>
    </Wrapper>
)

export default Products
