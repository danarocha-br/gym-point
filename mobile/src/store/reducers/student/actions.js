// GET STUDENT

export function loadStudentRequest(id) {
  return {
    type: '@student/LOAD_REQUEST',
    payload: { id },
  };
}

export function loadStudentSuccess(student) {
  return {
    type: '@student/LOAD_SUCCESS',
    payload: { student },
  };
}

export function loadStudentFailure(error) {
  return {
    type: '@student/LOAD_FAILURE',
    payload: { error },
  };
}
