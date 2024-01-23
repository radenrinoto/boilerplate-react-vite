import { FETCH_POKEMON, SET_POKEMON } from "./constants";

export const fetchPokemon = () => ({
  type: FETCH_POKEMON
})

export const setPokemon = (pokemon) => ({
  type: SET_POKEMON,
  pokemon
})