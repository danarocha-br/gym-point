import produce from 'immer';

const INITIAL_STATE = {
  enrollment: null,
  list: null,
  loading: false,
  showError: null,
};

export default function enrollments(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@enrollment/LOAD_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@enrollment/LOAD_SUCCESS': {
        draft.list = action.payload.enrollments;
        draft.loading = false;
        break;
      }

      case '@enrollment/LOAD_FAILURE': {
        draft.loading = false;
        draft.showError = action.payload.error;
        break;
      }

      // UPDATE
      case '@enrollment/UPDATE_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@enrollment/UPDATE_SUCCESS': {
        draft.enrollment = action.payload.enrollment;
        draft.list = draft.list.filter(enrollment => {
          return [
            enrollment.id !== action.payload.enrollment.id,
            draft.enrollment,
          ];
        });
        break;
      }

      // ADD
      case '@enrollment/ADD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@enrollment/ADD_SUCCESS': {
        draft.enrollment = action.payload.enrollment;
        draft.list = [...draft.list, action.payload.enrollment];
        break;
      }

      // DELETE
      case '@enrollment/DELETE_REQUEST': {
        draft.loading = false;
        break;
      }

      case '@enrollment/DELETE_SUCCESS': {
        draft.list = draft.list.filter(enrollment => {
          return enrollment.id !== action.payload.id;
        });
        draft.loading = false;
        break;
      }

      case '@enrollment/DELETE_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
