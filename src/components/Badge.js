import React from 'react';
import styled from "styled-components";

const StyledBadge = styled.b`
    pointer-events: none;
    background-color: green;
    color: black;
    padding: 5px;
    font-size: 16px;
    border: none;
    border-radius: 3px;
`;

const Badge = (props) => {
    return (
        <StyledBadge>
            {props.children}
        </StyledBadge>
    );
}
 
export default Badge;