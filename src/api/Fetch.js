import axios from "axios";
import React from 'react';

import PokemonList from '../components/PokemonList';

const fetchPokemon = async (pokemon) => {
    try{
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await axios.get(apiUrl);
        console.log(response);
        return response;
    }catch(error){
        console.log(error);
    }
    return null;
}

export {fetchPokemon};