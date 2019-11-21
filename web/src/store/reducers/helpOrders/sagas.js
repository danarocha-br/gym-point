import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { parseISO, differenceInDays } from 'date-fns';

import api from '~/services/api';
import history from '~/services/history';

import {
  loadOrdersSuccess,
  loadOrdersFailure,
  loadOrdersRequest,
  answerOrderSuccess,
  answerOrderFailure,
} from './actions';

import { hideModal } from '../modals/actions';

function* loadOrders() {
  try {
    const response = yield call(api.get, 'help-orders');
    const orders = response.data.map(order => {
      const parsedDate = parseISO(order.createdAt);
      const openFor = differenceInDays(new Date(), parsedDate);
      return {
        ...order,
        student: order.student.name,
        createdAt: `${openFor === 0 ? 'today' : `${openFor} ago`}`,
      };
    });

    yield put(loadOrdersSuccess(orders));
  } catch (error) {
    yield put(loadOrdersFailure(error));
  }
}

function* answerOrder({ payload }) {
  try {
    const { answer, id } = payload;

    const response = yield call(api.post, `/help-orders/${id}`, {
      id,
      answer,
    });

    toast.success('Answer successfully added.');
    yield put(answerOrderSuccess(response.data));

    yield put(hideModal());
    yield put(loadOrdersRequest());
  } catch (error) {
    toast.error(
      `There was an error when answering this order: ${error.response.data.error}`
    );
    yield put(answerOrderFailure());
  }
}

export default all([
  takeLatest('@order/LOAD_REQUEST', loadOrders),
  takeLatest('@order/ANSWER_REQUEST', answerOrder),
]);
