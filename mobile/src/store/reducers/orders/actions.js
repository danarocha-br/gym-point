// GET ALL HELP ORDERS

export function loadOrdersRequest(id) {
  return {
    type: '@order/LOAD_REQUEST',
    payload: { id },
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

// ASK ORDER

export function questionOrderRequest(id, question) {
  return {
    type: '@order/QUESTION_REQUEST',
    payload: { id, question },
  };
}

export function questionOrderSuccess(order) {
  return {
    type: '@order/QUESTION_SUCCESS',
    payload: { order },
  };
}

export function questionOrderFailure() {
  return {
    type: '@order/QUESTION_FAILURE',
  };
}
