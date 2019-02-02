import { withRouter } from 'next/router'
import styled, { css } from 'styled-components'


const Wrapper = styled.div`
    background-color: #f5eee8;
    padding: 1rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
`;

const Product = withRouter((props) => (
    <Wrapper>
        <h1>{props.router.query.title}</h1>
        <p>This is the product Product.</p>
    </Wrapper>
))


export default Product