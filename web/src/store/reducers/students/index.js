import produce from 'immer';

const INITIAL_STATE = {
  student: null,
  list: null,
  loading: false,
  showError: null,
};

export default function students(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/LOAD_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@student/LOAD_SUCCESS': {
        draft.list = action.payload.students;
        draft.loading = false;
        break;
      }

      case '@student/LOAD_FAILURE': {
        draft.loading = false;
        draft.showError = action.payload.error;
        break;
      }

      // DELETE
      case '@student/DELETE_REQUEST': {
        draft.loading = false;
        break;
      }

      case '@student/DELETE_SUCCESS': {
        draft.list = draft.list.filter(student => {
          return student.id !== action.payload.id;
        });
        draft.loading = false;
        break;
      }

      case '@student/DELETE_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
