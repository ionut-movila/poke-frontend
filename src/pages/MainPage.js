import React, { useEffect, useState } from "react";

import { fetchPokemon } from "../api/Fetch.js";
import Header from "../components/Header";
import PokemonList from "../components/PokemonList";

const getPokemons = () => {
    let pokemonsArray = [];
    for(let i = 0; i<=151; i++){
        pokemonsArray.push(fetchPokemon(i));
    }
    return pokemonsArray;
}

const MainPage = (props) => {
	let pokemons = getPokemons();
    console.log(pokemons);

	return (
		<React.Fragment>
			<Header title="Pokemon Page" />
			<PokemonList pokemons={pokemons} />
		</React.Fragment>
	);
};

export default MainPage;
