import { call, put, all, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { parseISO, formatRelative } from 'date-fns';

import api from '~/services/api';

import {
  loadCheckinsSuccess,
  loadCheckinsFailure,
  loadCheckinsRequest,
  makeCheckinSuccess,
  makeCheckinFailure,
} from './actions';

export function* loadCheckins({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `/students/${id}/checkins`);

    yield put(loadCheckinsSuccess(response.data));
  } catch (error) {
    // Alert.alert(`Error: ${error.response.data.error}`);
    yield put(loadCheckinsFailure());
  }
}
export function* makeCheckin({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.post, `/students/${id}/checkins`);

    yield put(makeCheckinSuccess(response.data));
    yield put(loadCheckinsRequest());
  } catch (error) {
    Alert.alert(`Error: ${error.response.data.error}`);
    yield put(makeCheckinFailure());
  }
}

export default all([
  takeLatest('@checkin/LOAD_REQUEST', loadCheckins),
  takeLatest('@checkin/CHECKIN_REQUEST', makeCheckin),
]);
