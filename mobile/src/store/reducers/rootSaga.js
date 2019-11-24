import { all } from 'redux-saga/effects';

import student from './student/sagas';
import checkins from './checkins/sagas';
import orders from './orders/sagas';

export default function* rootSaga() {
  return yield all([student, checkins, orders]);
}
