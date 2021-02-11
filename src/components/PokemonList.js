import React from "react";
import styled from "styled-components";

import PokemonItem from "./PokemonItem";

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
					name={pokemon.data.name}
					id={pokemon.data.id}
					image={pokemon.data.sprites.front_default}
				/>
            ))}
		</StyledList>
	);
};

export default PokemonList;
