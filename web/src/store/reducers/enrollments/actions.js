// ADD PLAN
export function addEnrollmentRequest(student_id, plan_id, start_date) {
  return {
    type: '@enrollment/ADD_REQUEST',
    payload: { student_id, plan_id, start_date },
  };
}

export function addEnrollmentSuccess(enrollment) {
  return {
    type: '@enrollment/ADD_SUCCESS',
    payload: { enrollment },
  };
}

export function addEnrollmentFailure() {
  return {
    type: '@enrollment/ADD_FAILURE',
  };
}

// UPDATE PLAN

export function updateEnrollmentRequest(id, plan_id, start_date) {
  return {
    type: '@enrollment/UPDATE_REQUEST',
    payload: { id, plan_id, start_date },
  };
}

export function updateEnrollmentSuccess(enrollment) {
  return {
    type: '@enrollment/UPDATE_SUCCESS',
    payload: { enrollment },
  };
}

export function updateEnrollmentFailure() {
  return {
    type: '@enrollment/UPDATE_FAILURE',
  };
}

// GET ALL PLANS

export function loadEnrollmentsRequest() {
  return {
    type: '@enrollment/LOAD_REQUEST',
  };
}

export function loadEnrollmentsSuccess(enrollments) {
  return {
    type: '@enrollment/LOAD_SUCCESS',
    payload: { enrollments },
  };
}

export function loadEnrollmentsFailure(error) {
  return {
    type: '@enrollment/LOAD_FAILURE',
    payload: { error },
  };
}

// DELETE PLAN

export function deleteEnrollmentRequest(id) {
  return {
    type: '@enrollment/DELETE_REQUEST',
    payload: { id },
  };
}

export function deleteEnrollmentSuccess(id) {
  return {
    type: '@enrollment/DELETE_SUCCESS',
    payload: { id },
  };
}

export function deleteEnrollmentFailure() {
  return {
    type: '@enrollment/DELETE_FAILURE',
  };
}
