import React from 'react';
import styled from 'styled-components'

const StyledCard = styled.div`
    border: 2px solid yellow;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background-color: yellowgreen;
    margin: 10px;
    padding: 10px;
    width: calc(100% * (1/4) - 30px - 16px);
`;

const Card = (props) => {
    return (
        <StyledCard>
            {props.children}
        </StyledCard>
    );
}
 
export default Card;