import React from 'react';
import styled from 'styled-components'

const StyledCard = styled.div`
    box-sizing: border-box;
    display: inline-block;
    border: 2px solid black;
    border-radius: 5px;
    background-color: red;
    justify-content: center;
    overflow: hidden;
    position: relative;
`;

const Card = (props) => {
    return (
        <StyledCard>
            {props.children}
        </StyledCard>
    );
}
 
export default Card;