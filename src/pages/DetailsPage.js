import React, { useEffect, useState } from "react";

import Badge from "../components/Badge";
import Header from "../components/Header";
import Icon from "./../components/Icon";

const DetailsPage = (props) => {
	const pokemonId = props.match.params.pokemonId;
	const [pokemon, setPokemon] = useState({});
	const getPokemonById = async (pokemonId) => {
		let pokemon = {};
		try {
			pokemon = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${pokemonId}`
			).then((response) => response.json());
		} catch (error) {
			console.log(error);
		}
		console.log(pokemon);
		return pokemon;
	};
	useEffect(async () => {
		setPokemon(await getPokemonById(pokemonId));
	}, []);
	const displaySprites = () => {
		const values = pokemon.sprites.values();
		values.map((value) => <Icon image={value} />);
	};
	return (
		<ul>
			<li>
				<Header title={`Details page for ${pokemon.name}`} />
			</li>
			<li>{displaySprites()}</li>
			<li>
				{pokemon.stats.map((statistic) => (
					<div>
						<p>Name: {statistic.stat.name}</p>
						<p>Base stat: {statistic.base_stat}</p>
						<p>Effort : {statistic.effort}</p>
					</div>
				))}
			</li>
			<li>
				{pokemon.types.map((element) => (
					<Badge title={element.type.name} />
				))}
			</li>
		</ul>
	);
};

export default DetailsPage;
