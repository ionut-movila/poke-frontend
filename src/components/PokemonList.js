import React from "react";

import PokemonItem from "./PokemonItem/PokemonItem";

const PokemonList = (props) => {
	if (props.pokemons.length === 0) {
		return <p>No pokemon found</p>;
	}

	return props.pokemons.map((pokemon) => (
		<PokemonItem
			name={pokemon.name}
			id={pokemon.id}
			image={pokemon.image}
		/>
	));
};

export default PokemonList;
