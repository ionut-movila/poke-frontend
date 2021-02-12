import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

import Card from "./Card";
import Icon from "./Icon";

const StyledName = styled.h2`
	text-align: center;
	font-size: 20px;
	flex-grow: 1;
`;

const PokemonItem = (props) => {
    console.log(props.id);
	return (
		<Card>
			<div
				key={props.key}
				style={{ display: "flex", flexDirection: "row" }}
			>
				<Link to={`/${props.id}/details`}>
					<Icon image={props.image} alt={props.name} />
					<StyledName>{props.name}</StyledName>
				</Link>
			</div>
		</Card>
	);
};

export default PokemonItem;
