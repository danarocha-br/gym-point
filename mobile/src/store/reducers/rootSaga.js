import { all } from 'redux-saga/effects';

import student from './student/sagas';

export default function* rootSaga() {
  return yield all([student]);
}
