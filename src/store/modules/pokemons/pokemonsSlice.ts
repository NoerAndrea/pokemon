import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "../../../config/interfaces/pokemon.interfaces";
import { fetchAllPokemons } from "./pokemons.action";

export const pokemonAdapter = createEntityAdapter({
  selectId: (pokemon: Pokemon) => pokemon.id,
});

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: pokemonAdapter.getInitialState({
    message: "",
    pagination: {
      limit: 20,
      count: 0,
      totalPages: 0,
    },
  }),
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllPokemons.fulfilled, (currentState, action) => {
      if (action.payload.ok) {
        pokemonAdapter.setAll(currentState, action.payload.pokemon!);

        currentState.pagination = action.payload.pagination!;
      }
      currentState.message = action.payload.message;
    });
  },
});

export const pokemonReducer = pokemonSlice.reducer;

export const { selectAll: listPokemons, selectById: getPokemonsById } =
  pokemonAdapter.getSelectors();
