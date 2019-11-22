// ADD
export function addStudentRequest(name, email, birthday, weight, height) {
  return {
    type: '@student/ADD_REQUEST',
    payload: { name, email, birthday, weight, height },
  };
}

export function addStudentSuccess(student) {
  return {
    type: '@student/ADD_SUCCESS',
    payload: { student },
  };
}

export function addStudentFailure() {
  return {
    type: '@student/ADD_FAILURE',
  };
}

// UPDATE

export function updateStudentRequest(
  id,
  name,
  email,
  birthday,
  weight,
  height
) {
  return {
    type: '@student/UPDATE_REQUEST',
    payload: { id, name, email, birthday, weight, height },
  };
}

export function updateStudentSuccess(student) {
  return {
    type: '@student/UPDATE_SUCCESS',
    payload: { student },
  };
}

export function updateStudentFailure() {
  return {
    type: '@student/UPDATE_FAILURE',
  };
}

// GET ALL STUDENTS

export function loadStudentsRequest(search) {
  return {
    type: '@student/LOAD_REQUEST',
    payload: { search },
  };
}

export function loadStudentsSuccess(students) {
  return {
    type: '@student/LOAD_SUCCESS',
    payload: { students },
  };
}

export function loadStudentsFailure(error) {
  return {
    type: '@student/LOAD_FAILURE',
    payload: { error },
  };
}

// DELETE STUDENT

export function deleteStudentRequest(id) {
  return {
    type: '@student/DELETE_REQUEST',
    payload: { id },
  };
}

export function deleteStudentSuccess(id) {
  return {
    type: '@student/DELETE_SUCCESS',
    payload: { id },
  };
}

export function deleteStudentFailure() {
  return {
    type: '@student/DELETE_FAILURE',
  };
}
