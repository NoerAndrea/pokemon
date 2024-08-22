import { combineReducers } from "@reduxjs/toolkit";
import { pokemonReducer } from "./pokemons/pokemonsSlice";
import { pokedexReducer } from "./pokedex/pokedexSlice";

export const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  pokedex: pokedexReducer,
});
