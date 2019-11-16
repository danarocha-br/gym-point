// ADD PLAN
export function addPlanRequest(title, duration, price) {
  return {
    type: '@plan/ADD_REQUEST',
    payload: { title, duration, price },
  };
}

export function addPlanSuccess(plan) {
  return {
    type: '@plan/ADD_SUCCESS',
    payload: { plan },
  };
}

export function addPlanFailure() {
  return {
    type: '@plan/ADD_FAILURE',
  };
}

// UPDATE PLAN

export function updatePlanRequest(id, title, duration, price) {
  return {
    type: '@plan/UPDATE_REQUEST',
    payload: { id, title, duration, price },
  };
}

export function updatePlanSuccess(plan) {
  return {
    type: '@plan/UPDATE_SUCCESS',
    payload: { plan },
  };
}

export function updatePlanFailure() {
  return {
    type: '@plan/UPDATE_FAILURE',
  };
}

// GET ALL PLANS

export function loadPlansRequest() {
  return {
    type: '@plan/LOAD_REQUEST',
  };
}

export function loadPlansSuccess(plans) {
  return {
    type: '@plan/LOAD_SUCCESS',
    payload: { plans },
  };
}

export function loadPlansFailure(error) {
  return {
    type: '@plan/LOAD_FAILURE',
    payload: { error },
  };
}

// DELETE PLAN

export function deletePlanRequest(id) {
  return {
    type: '@plan/DELETE_REQUEST',
    payload: { id },
  };
}

export function deletePlanSuccess(id) {
  return {
    type: '@plan/DELETE_SUCCESS',
    payload: { id },
  };
}

export function deletePlanFailure() {
  return {
    type: '@plan/DELETE_FAILURE',
  };
}
