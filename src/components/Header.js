import React from "react";
import styled from "styled-components";

import SearchOption from "./SearchOption";

const StyledHeader = styled.div`
	padding-inline: 52px;
    padding-block: 20px;
	align-items: center;
    display: flex;
    justify-content: space-between;
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
