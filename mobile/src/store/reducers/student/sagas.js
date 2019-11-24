import { call, put, all, takeLatest } from 'redux-saga/effects';

import { Alert } from 'react-native';

import api from '~/services/api';

import { loadStudentSuccess, loadStudentFailure } from './actions';

export function* loadStudent({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `/enrollments/${id}`);

    yield put(loadStudentSuccess(response.data));
  } catch (error) {
    Alert.alert(`${error.response.data.error}`);
    yield put(loadStudentFailure(error));
  }
}

export default all([takeLatest('@student/LOAD_REQUEST', loadStudent)]);
