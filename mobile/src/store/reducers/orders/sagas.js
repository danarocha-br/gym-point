import { call, put, all, takeLatest } from 'redux-saga/effects';
import { parseISO, differenceInDays } from 'date-fns';
import { Alert } from 'react-native';
import api from '~/services/api';

import {
  loadOrdersSuccess,
  loadOrdersFailure,
  loadOrdersRequest,
  questionOrderFailure,
  questionOrderSuccess,
} from './actions';

import { hideModal } from '../modals/actions';

function* loadOrders({ payload }) {
  const { id } = payload;

  try {
    const response = yield call(api.get, `/students/${id}/help-orders`);
    const orders = response.data.map(order => {
      const parsedDate = parseISO(order.createdAt);
      const openFor = differenceInDays(new Date(), parsedDate);
      return {
        ...order,
        student: order.student.name,
        // createdAt: `${openFor === 0 ? 'today' : `${openFor} ago`}`,
      };
    });

    yield put(loadOrdersSuccess(orders));
  } catch (error) {
    yield put(loadOrdersFailure(error));
  }
}

function* questionOrder({ payload }) {
  try {
    const { question, id } = payload;

    const response = yield call(api.post, `students/${id}/help-orders`, {
      id,
      question,
    });

    yield put(questionOrderSuccess(response.data));

    yield put(hideModal());
    yield put(loadOrdersRequest());
  } catch (error) {
    Alert.alert(`Error: ${error.response.data.error}`);
    yield put(questionOrderFailure());
  }
}

export default all([
  takeLatest('@order/LOAD_REQUEST', loadOrders),
  takeLatest('@order/QUESTION_REQUEST', questionOrder),
]);
