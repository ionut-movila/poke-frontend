import React from "react";
import styled from "styled-components";

import PokemonItem from "./PokemonItem";

const StyledList = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
    margin: 40px;
`;

const PokemonList = (props) => {
	if (props.pokemons.length === 0) {
		return <p>No pokemon found</p>;
	}

	const { pokemons } = props;

	return (
		<StyledList>
			{pokemons.map((pokemon) => {
				return (
					<PokemonItem
						name={pokemon.name}
						key={pokemon.id}
                        id={pokemon.id}
						image={pokemon.sprites.front_default}
					/>
				);
			})}
		</StyledList>
	);
};

export default PokemonList;
