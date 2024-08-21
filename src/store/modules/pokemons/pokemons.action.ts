import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllPokemonsServices } from "../../../config/services/pokemon-api/pokemons.service";

interface FetchAllPokemon {
  limit: number;
  page: number;
}

export const fetchAllPokemons = createAsyncThunk(
  "pokemon/getAll",
  async (obj: FetchAllPokemon) => {
    const result = await getAllPokemonsServices(obj.page, obj.limit);

    return result;
  }
);
