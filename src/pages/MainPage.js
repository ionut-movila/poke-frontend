import React from "react";

import Header from '../components/Header';
import PokemonList from "../components/PokemonList";

const MainPage = (props) => {
	const dummyPokemons = [
		{
			id: 1,
			name: "pikachu",
			image:
				"https://i.pinimg.com/originals/f5/1d/08/f51d08be05919290355ac004cdd5c2d6.png",
		},
		{
			id: 2,
			name: "bulbasaur",
			image:
				"https://static.pokemonpets.com/images/monsters-images-300-300/1-Bulbasaur.png",
		},
	];

	return (
		<React.Fragment>
            <Header title="Pokemon Page"/>
			<PokemonList pokemons={dummyPokemons} />
		</React.Fragment>
	);
};

export default MainPage;
