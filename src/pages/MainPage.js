import React, { useEffect, useState } from "react";
import axios from "axios";

import { getPokemon } from "../api/Fetch.js";
import Header from "../components/Header";
import PokemonList from "../components/PokemonList.js";
import styled from "styled-components";

const StyledPage = styled.div`
	overflow: "auto";
`;

const MainPage = (props) => {
	const [pokemons, setPokemons] = useState([]);

	const getPokemon = async (pokemonId) => {
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
			getPokemon(i);
		}
	}, []);

	return (
		<StyledPage>
			<Header title="Pokemon Page" />
			<PokemonList pokemons={pokemons} />
		</StyledPage>
	);
};

export default MainPage;
