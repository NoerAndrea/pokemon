import { useDispatch } from "react-redux";

import {
  addPokemon,
  listPokedex,
  removePokemon,
} from "../store/modules/pokedex/pokedexSlice";
import { useAppSelector } from "../store/hook";
import like from "../assets/icone_curtir.svg";
import likeSelected from "../assets/icone_curtir_selecionado.svg";
import { Pokemon } from "../config/interfaces/pokemon.interfaces";

interface IconFavoriteProps {
  pokemon: Pokemon;
}

export function LikeIcon(props: IconFavoriteProps) {
  const pokedex = useAppSelector((state) =>
    listPokedex(state.persistedReducer.pokedex)
  );

  const dispatch = useDispatch();
  const handleFavorite = (pokemonSelected: Pokemon) => {
    const isFavorite = pokedex.some((a) => a.id === pokemonSelected.id);

    if (isFavorite) {
      dispatch(removePokemon(pokemonSelected.id));
    } else {
      dispatch(addPokemon(pokemonSelected));
    }
  };
  return (
    <img
      onClick={() => handleFavorite(props.pokemon)}
      src={pokedex.some((a) => a.id == props.pokemon.id) ? likeSelected : like}
      alt="favorite icon"
      style={{
        marginLeft: "1rem",
        marginBottom: "0.3rem",
        cursor: "pointer",
      }}
    />
  );
}
