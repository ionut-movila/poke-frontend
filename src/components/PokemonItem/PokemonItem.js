import React from "react";
import styled from "styled-components";

import Card from "./../Card";
import Icon from "./../Icon";

const PokemonItem = (props) => {
	return (
		<Card>
			<Icon image={props.image} alt={props.name} />
			<p>{props.name}</p>
		</Card>
	);
};

export default PokemonItem;
