import React from "react";
import styled from "styled-components";

import PokemonItem from "./PokemonItem/PokemonItem";

const StyledList = styled.div`
	display: flex;
	flex-direction: row;
`;

const PokemonList = (props) => {
	if (props.pokemons.length === 0) {
		return <p>No pokemon found</p>;
	}

	return (
		<StyledList>
			{props.pokemons.map((pokemon) => (
				<PokemonItem
					name={pokemon.name}
					id={pokemon.id}
					image={pokemon.image}
				/>
			))}
		</StyledList>
	);
};

export default PokemonList;
