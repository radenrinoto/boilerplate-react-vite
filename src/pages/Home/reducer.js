import { produce } from 'immer';

import { SET_POKEMON } from './constants';

export const initialState = {
  pokemon: {}
};

export const storedKey = ['pokemon'];

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_POKEMON:
        draft.pokemon = action.pokemon;
        break;
    }
  });

export default homeReducer;
