// GET ALL HELP ORDERS

export function loadOrdersRequest() {
  return {
    type: '@order/LOAD_REQUEST',
  };
}

export function loadOrdersSuccess(orders) {
  return {
    type: '@order/LOAD_SUCCESS',
    payload: { orders },
  };
}

export function loadOrdersFailure(error) {
  return {
    type: '@order/LOAD_FAILURE',
    payload: { error },
  };
}

// ANSWER ORDER

export function answerOrderRequest(id, answer) {
  return {
    type: '@order/ANSWER_REQUEST',
    payload: { id, answer },
  };
}

export function answerOrderSuccess(order) {
  return {
    type: '@order/ANSWER_SUCCESS',
    payload: { order },
  };
}

export function answerOrderFailure() {
  return {
    type: '@order/ANSWER_FAILURE',
  };
}
