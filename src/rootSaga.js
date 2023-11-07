import { all } from 'redux-saga/effects';

import appSaga from '@containers/App/saga';

export default function* rootSaga() {
  yield all([
    appSaga(),
  ]);
}
