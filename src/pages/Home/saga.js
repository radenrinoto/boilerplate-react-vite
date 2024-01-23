import { takeLatest, call, put } from 'redux-saga/effects';

// import { ping } from '@domain/api';
import { showPopup, setLoading } from '@containers/App/actions';
import { fetchPokemon } from '@domain/api';
import { setPokemon } from './actions';
import { FETCH_POKEMON } from './constants';
// import { PING } from '@containers/App/constants';

function* doFetchPokemon() {
  yield put(setLoading(true));
  try {
    const response = yield call(fetchPokemon);
    yield put(setPokemon(response));
  } catch (error) {
    console.log(error)
  }
  yield put(setLoading(false));
}

export default function* homeSaga() {
  yield takeLatest(FETCH_POKEMON, doFetchPokemon);
}
