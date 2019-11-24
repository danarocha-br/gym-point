import produce from 'immer';

const INITIAL_STATE = {
  order: null,
  list: null,
  loading: false,
  showError: null,
};

export default function helpOrders(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@order/LOAD_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@order/LOAD_SUCCESS': {
        draft.list = action.payload.orders;
        draft.loading = false;
        break;
      }

      case '@order/LOAD_FAILURE': {
        draft.loading = false;
        draft.showError = action.payload.error;
        break;
      }

      // QUESTION ORDERS
      case '@order/QUESTION_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@order/QUESTION_SUCCESS': {
        draft.order = action.payload.order;
        draft.list = [...draft.list, action.payload.order];
        draft.loading = false;
        break;
      }

      case '@order/QUESTION_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
