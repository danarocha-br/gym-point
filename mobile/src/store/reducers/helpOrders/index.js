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

      // ANSWER ORDERS
      case '@order/ANSWER_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@order/ANSWER_SUCCESS': {
        draft.order = action.payload.order;
        draft.list = draft.list.filter(order => {
          return order.id !== action.payload.id;
        });
        draft.loading = false;
        break;
      }

      case '@order/ANSWER_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
