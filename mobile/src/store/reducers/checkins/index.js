import produce from 'immer';

const INITIAL_STATE = {
  current: {},
  list: null,
  loading: false,
  showError: null,
};

export default function checkins(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@checkin/LOAD_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@checkin/LOAD_SUCCESS': {
        draft.list = [...action.payload.checkins];
        draft.loading = false;
        break;
      }

      case '@checkin/LOAD_FAILURE': {
        draft.loading = false;
        draft.showError = action.payload.error;
        break;
      }
      // ADD
      case '@checkin/CHECKIN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@checkin/CHECKIN_SUCCESS': {
        draft.current = action.payload.checkin;
        draft.list = [...draft.list, action.payload.checkin];
        draft.loading = false;
        break;
      }

      case '@checkin/CHECKIN_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
