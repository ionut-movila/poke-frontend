import React from 'react';
import styled from 'styled-components'

const StyledCard = styled.div`
    box-sizing: border-box;
    border: 2px solid yellow;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background-color: red;
    margin: 10px;
    padding: 10px;
    width: 20%;
    height: 20%;
`;

const Card = (props) => {
    return (
        <StyledCard>
            {props.children}
        </StyledCard>
    );
}
 
export default Card;