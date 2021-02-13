import React from "react";
import styled from "styled-components";

import { ButtonTypes } from '../enums/ButtonTypes';

const StyledSubmitButton = styled.button`
	background-color: transparent;
	border: none;
	color: white;
	outline: none;
	cursor: pointer;
	font: inherit;
	padding: 10px;
	margin: 10px;
	font-weight: bold;
`;

const Button = (props) => {
	switch (props.buttonType) {
		case ButtonTypes.SUBMIT:
            return(
                <StyledSubmitButton>SEARCH</StyledSubmitButton>
            );
	}
};

export default Button;
