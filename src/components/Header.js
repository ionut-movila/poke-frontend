import React from "react";
import styled from "styled-components";

import SearchOption from "./SearchOption";

const StyledHeader = styled.div`
	padding: 10px;
	align-items: center;
`;

const StyledTitle = styled.h2`
	text-align: center;
	font-size: 18px;
`;

const Header = (props) => {
	return (
		<StyledHeader>
			<StyledTitle>{props.title}</StyledTitle>
			<SearchOption />
		</StyledHeader>
	);
};

export default Header;
