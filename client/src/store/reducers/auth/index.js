import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  authenticaded: false,
  loading: false,
};

export default function auth(state = { INITIAL_STATE }, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.authenticaded = true;
        draft.loading = false;
        break;
      }

      case '@auth/SIGN_IN_FAILURE ': {
        draft.loading = false;
        break;
      }

      default:
        return state;
    }
  });
}
