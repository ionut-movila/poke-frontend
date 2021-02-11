import React from "react";
import styled from "styled-components";

import Card from "./Card";
import Icon from "./Icon";

const StyledName = styled.h2`
	text-align: center;
	font-size: 20px;
`;

const PokemonItem = (props) => {
	return (
		<Card>
			<div style={{ display: "flex", flexDirection: "row" }}>
				<Icon image={props.image} alt={props.name} />
				<StyledName>{props.name}</StyledName>
			</div>
		</Card>
	);
};

export default PokemonItem;
