import { createSelector } from 'reselect';
import { initialState } from '@containers/App/reducer';

const selectHomeState = (state) => state.home || initialState;

export const selectPokemon = createSelector(selectHomeState, (state) => state.pokemon);
