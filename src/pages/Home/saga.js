import { takeLatest, call, put } from 'redux-saga/effects';

// import { ping } from '@domain/api';
import { showPopup, setLoading } from '@containers/App/actions';
import { fetchPokemon, register } from '@domain/api';
import { setPokemon } from './actions';
import { FETCH_POKEMON, REGISTER } from './constants';
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

function* doRegister({ dataUser }) {
  yield put(setLoading(true));
  try {
    const response = yield call(register, dataUser);
    yield put(setPokemon(response));
  } catch (error) {
    console.log(error)
  }
  yield put(setLoading(false));
}

export default function* homeSaga() {
  yield takeLatest(FETCH_POKEMON, doFetchPokemon);
  yield takeLatest(REGISTER, doRegister);
}
