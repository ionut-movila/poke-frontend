import React, { useEffect, useState } from "react";

import Header from "../components/Header";

const DetailsPage = (props) => {
	const pokemonId = props.match.params.pokemonId;
	const [pokemon, setPokemon] = useState({});
	const getPokemonById = async (pokemonId) => {
		let pokemon = {};
		try {
			pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
				.then((response) => response.json());
		} catch (error) {
			console.log(error);
		}
		return pokemon;
	};
	useEffect(async () => {
		setPokemon(await getPokemonById(pokemonId));
	}, []);
	return <Header title={`Details page for ${pokemon.name}`} />;
};

export default DetailsPage;
