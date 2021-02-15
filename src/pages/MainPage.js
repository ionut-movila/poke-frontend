import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Header from "../components/Header";
import PokemonList from "../components/PokemonList.js";

const StyledPage = styled.div`
	/* overflow: "scroll"; */
`;

const MainPage = (props) => {
	const [pokemons, setPokemons] = useState([]);

	const getPokemons = (pokemonId) => {
		let pokemon = {};
		try {
			// const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
			// const res = await axios.get(apiUrl);
			// pokemons.push(res.data);
			pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
				.then((response) => response.json())
				.then((response) =>
					setPokemons((pokemons) => [...pokemons, response])
				)
				.then(() => {
					console.log(pokemons);
				});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		for (let i = 0; i < 151; i++) {
			getPokemons(i);
		}
        const pokemonsCopy = pokemons;
        pokemonsCopy.sort((pokemon1, pokemon2) => (pokemon1.id > pokemon2.id) ? 1 : -1);
        setPokemons(pokemonsCopy);
	}, []);

	return (
		<StyledPage>
			<Header title="Pokemon Page" isDashboardPage/>
			<PokemonList pokemons={pokemons} />
		</StyledPage>
	);
};

export default MainPage;
