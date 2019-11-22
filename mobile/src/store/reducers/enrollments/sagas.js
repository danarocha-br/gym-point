import { call, put, all, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { format, parseISO } from 'date-fns';

import api from '~/services/api';

import {
  loadEnrollmentsSuccess,
  loadEnrollmentsRequest,
  loadEnrollmentsFailure,
  addEnrollmentSuccess,
  addEnrollmentFailure,
  deleteEnrollmentSuccess,
  deleteEnrollmentFailure,
  updateEnrollmentSuccess,
  updateEnrollmentFailure,
} from './actions';

import { hideModal } from '../modals/actions';

function* loadEnrollments() {
  try {
    const response = yield call(api.get, 'enrollments');

    const enrollments = response.data.map(enrollment => {
      const parsedStartDate = parseISO(enrollment.start_date);
      const parsedEndDate = parseISO(enrollment.end_date);

      return {
        ...enrollment,
        student: enrollment.student.name,
        plan: enrollment.plan.title,
        plan_id: enrollment.plan.id,
        start_date: format(parsedStartDate, 'dd/MM/yyyy'),
        end_date: format(parsedEndDate, 'dd/MM/yyyy'),
      };
    });

    yield put(loadEnrollmentsSuccess(enrollments));
  } catch (error) {
    yield put(loadEnrollmentsFailure(error));
  }
}

function* addEnrollment({ payload }) {
  try {
    const response = yield call(api.post, '/enrollments', payload);

    yield put(hideModal());
    yield put(loadEnrollmentsRequest());

    yield put(addEnrollmentSuccess(response.data));
  } catch (error) {
    toast.error(
      `There was an error when adding the enrollments: ${error.response.data.error}`
    );
    yield put(addEnrollmentFailure(error));
  }
}

function* updateEnrollment({ payload }) {
  try {
    const { plan_id, start_date, id } = payload;

    const response = yield call(api.put, `/enrollments/${id}`, {
      plan_id,
      start_date,
    });

    yield put(updateEnrollmentSuccess(response.data));
    yield put(loadEnrollmentsRequest());

    yield put(hideModal());
  } catch (error) {
    toast.error(
      `There was an error when updating the enrollment: ${error.response.data.error}`
    );
    yield put(updateEnrollmentFailure());
  }
}

function* deleteEnrollment({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `/enrollments/${id}`);

    yield put(deleteEnrollmentSuccess(id));

    // history.push('/enrollments');
  } catch (error) {
    Alert.alert('An error ocurred. Please try again.');
    yield put(deleteEnrollmentFailure(error));
  }
}

export default all([
  takeLatest('@enrollment/LOAD_REQUEST', loadEnrollments),
  takeLatest('@enrollment/ADD_REQUEST', addEnrollment),
  takeLatest('@enrollment/UPDATE_REQUEST', updateEnrollment),
  takeLatest('@enrollment/DELETE_REQUEST', deleteEnrollment),
]);
