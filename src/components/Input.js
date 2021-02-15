import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    font-family: 'Roboto', sans-serif;
    color: #333;
    border-radius: 0.2rem;
    font-size: 20px;
    border-bottom: 0.3rem solid transparent;
    transition: all 0.3s;
`;

const Input = (props) => {
    return <StyledInput type={props.type}/>;
}
 
export default Input;