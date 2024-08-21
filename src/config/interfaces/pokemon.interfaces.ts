export interface DataPokemon {
  id: string;
  name: string;
}
export interface Pokemon {
  id: number;
  name: string;
  size: number;
  height: number;
  image: string;
  isFavorite: boolean;
  habilitis: [
    {
      habilitiName: string;
    }
  ];
  stats: [
    {
      strength: number;
      statName: string;
      effort: number;
      urlStat: string;
      typeStats: string; // -> /stat/3/
    }
  ];
}
