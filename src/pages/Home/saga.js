import { takeLatest, call, put } from 'redux-saga/effects';

import { showPopup, setLoading } from '@containers/App/actions';
import { fetchPokemon, register } from '@domain/api';
import { setPokemon } from './actions';
import { FETCH_POKEMON, REGISTER } from './constants';

function* doFetchPokemon() {
  yield put(setLoading(true));
  try {
    const response = yield call(fetchPokemon);
    yield put(setPokemon(response));
  } catch (error) {
    // console.log(error)
  }
  yield put(setLoading(false));
}

function* doRegister({ dataUser, cbSuccess, cbFailed }) {
  yield put(setLoading(true));
  try {
    const response = yield call(register, dataUser)
    const user = {
      email: 'blabla'
    }
    cbSuccess && cbSuccess(user);
  } catch (error) {
    cbFailed && cbFailed()
  }
  yield put(setLoading(false));
}

export default function* homeSaga() {
  yield takeLatest(FETCH_POKEMON, doFetchPokemon);
  yield takeLatest(REGISTER, doRegister);
}
