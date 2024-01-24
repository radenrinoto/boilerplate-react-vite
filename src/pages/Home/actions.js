import { FETCH_POKEMON, SET_POKEMON, REGISTER } from "./constants";

export const fetchPokemon = () => ({
  type: FETCH_POKEMON
})

export const setPokemon = (pokemon) => ({
  type: SET_POKEMON,
  pokemon
})

export const register = (dataUser) => ({
  type: REGISTER,
  dataUser
})