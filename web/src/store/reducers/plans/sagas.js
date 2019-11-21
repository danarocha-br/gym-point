import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import { formatPrice } from '~/util/format';
import {
  loadPlansSuccess,
  loadPlansFailure,
  addPlanSuccess,
  addPlanFailure,
  deletePlanSuccess,
  deletePlanFailure,
  updatePlanSuccess,
  updatePlanFailure,
  loadPlansRequest,
} from './actions';

import { hideModal } from '../modals/actions';

function* loadPlans() {
  try {
    const response = yield call(api.get, 'plans');
    const plans = response.data.map(plan => ({
      ...plan,
      price: formatPrice(plan.price),
    }));

    yield put(loadPlansSuccess(plans));
  } catch (error) {
    yield put(loadPlansFailure(error));
  }
}

function* addPlan({ payload }) {
  try {
    const response = yield call(api.post, '/plans', payload);

    yield put(hideModal());
    yield put(loadPlansRequest());

    yield put(addPlanSuccess(response.data));
  } catch (error) {
    toast.error(
      `There was an error when adding the plans: ${error.response.data.error}`
    );
    yield put(addPlanFailure(error));
  }
}

function* updatePlan({ payload }) {
  try {
    const { title, duration, price, id } = payload;

    const response = yield call(api.put, `/plans/${id}`, {
      id,
      title,
      duration,
      price,
    });

    yield put(updatePlanSuccess(response.data));

    yield put(hideModal());
    yield put(loadPlansRequest());
  } catch (error) {
    toast.error(
      `There was an error when updating the plan: ${error.response.data.error}`
    );
    yield put(updatePlanFailure());
  }
}

function* deletePlan({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `/plans/${id}`);

    yield put(deletePlanSuccess(id));

    history.push('/plans');
  } catch (error) {
    toast.error('An error ocurred. Please try again.');
    yield put(deletePlanFailure(error));
  }
}

export default all([
  takeLatest('@plan/LOAD_REQUEST', loadPlans),
  takeLatest('@plan/ADD_REQUEST', addPlan),
  takeLatest('@plan/UPDATE_REQUEST', updatePlan),
  takeLatest('@plan/DELETE_REQUEST', deletePlan),
]);
