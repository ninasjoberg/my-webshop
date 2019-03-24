import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
    width: 150px;
    height: 50px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 16px;
    letter-spacing: 1px;
    cursor: pointer;
    background-color: black;
    color: white;
    border-radius: 6px;
    :hover {
        opacity: 0.4;
    }
`;


const ActionButton = ({ buttonText, onClick }) => {
    return (
        <Button type="submit" value="Submit" onClick={onClick}>
            {buttonText}
        </Button>
    )
}

export default ActionButton