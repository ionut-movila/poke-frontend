import React from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";

const getPokemonById = (pokemonId) => {
    let pokemon = {};
    try {
        pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then((response) => response.json());
    } catch (error) {
        console.log(error);
    }
    return pokemon;
};

const DetailsPage = (props) => {
    const pokemonId = props.match.params.pokemonId;
    const pokemon = getPokemonById(pokemonId);

    return(
        <h2></h2>
    );
};

export default DetailsPage;
