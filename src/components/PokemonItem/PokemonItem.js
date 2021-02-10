import React from "react";
import styled from "styled-components";

const PokemonItem = (props) => {
	return (
		<div>
			<img src={props.image} alt={props.name} />
			<p>{props.name}</p>
		</div>
	);
};

export default PokemonItem;
