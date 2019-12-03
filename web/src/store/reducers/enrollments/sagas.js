import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';

import api from '~/services/api';
import history from '~/services/history';

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
        start_date: format(parsedStartDate, 'yyyy-MM-dd'),
        end_date: format(parsedEndDate, 'yyyy-MM-dd'),
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

    toast.success('Student enrolled successfully.');
    yield put(hideModal());
    yield put(loadEnrollmentsRequest());

    yield put(addEnrollmentSuccess(response.data));
  } catch (error) {
    toast.error(
      `There was an error when adding the enrollments: ${error.response.data.error}`
    );
    yield put(addEnrollmentFailure(error));
    yield put(hideModal());
  }
}

function* updateEnrollment({ payload }) {
  try {
    const { plan_id, start_date, id } = payload;

    const response = yield call(api.put, `/enrollments/${id}`, {
      plan_id,
      start_date,
    });

    toast.success('Enrollment updated successfully.');

    yield put(updateEnrollmentSuccess(response.data));
    yield put(loadEnrollmentsRequest());

    yield put(hideModal());
  } catch (error) {
    toast.error(
      `There was an error when updating the enrollment: ${error.response.data.error}`
    );
    yield put(updateEnrollmentFailure());
    yield put(hideModal());
  }
}

function* deleteEnrollment({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `/enrollments/${id}`);

    toast.success('Enrollment cancelled successfully.');

    yield put(deleteEnrollmentSuccess(id));

    history.push('/enrollments');
  } catch (error) {
    toast.error('An error ocurred. Please try again.');
    yield put(deleteEnrollmentFailure(error));
  }
}

export default all([
  takeLatest('@enrollment/LOAD_REQUEST', loadEnrollments),
  takeLatest('@enrollment/ADD_REQUEST', addEnrollment),
  takeLatest('@enrollment/UPDATE_REQUEST', updateEnrollment),
  takeLatest('@enrollment/DELETE_REQUEST', deleteEnrollment),
]);
