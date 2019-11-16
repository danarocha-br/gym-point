import produce from 'immer';

const INITIAL_STATE = {
  plan: null,
  list: null,
  loading: false,
  showError: null,
};

export default function plans(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@plan/LOAD_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@plan/LOAD_SUCCESS': {
        draft.list = action.payload.plans;
        draft.loading = false;
        break;
      }

      case '@plan/LOAD_FAILURE': {
        draft.loading = false;
        draft.showError = action.payload.error;
        break;
      }

      // UPDATE
      case '@plan/UPDATE_SUCCESS': {
        draft.plan = action.payload.plan;
        draft.list = draft.list.filter(plan => {
          return [plan.id !== action.payload.plan.id, draft.plan];
        });
        break;
      }

      // ADD
      case '@plan/ADD_SUCCESS': {
        draft.plan = action.payload.plan;
        draft.list = [...draft.list, action.payload.plan];
        break;
      }

      // DELETE
      case '@plan/DELETE_REQUEST': {
        draft.loading = false;
        break;
      }

      case '@plan/DELETE_SUCCESS': {
        draft.list = draft.list.filter(plan => {
          return plan.id !== action.payload.id;
        });
        draft.loading = false;
        break;
      }

      case '@plan/DELETE_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
