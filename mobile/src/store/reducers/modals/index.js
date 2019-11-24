import produce from 'immer';

const INITIAL_STATE = {
  modal: null,
};

export default function modals(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@modal/SHOW_MODAL': {
        draft.modal = true;
        break;
      }

      case '@modal/HIDE_MODAL': {
        draft.modal = null;
        break;
      }

      default:
    }
  });
}
