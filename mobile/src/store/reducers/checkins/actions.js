// GET CHECKINS

export function loadCheckinsRequest(id) {
  return {
    type: '@checkin/LOAD_REQUEST',
    payload: { id },
  };
}

export function loadCheckinsSuccess(checkins) {
  return {
    type: '@checkin/LOAD_SUCCESS',
    payload: { checkins },
  };
}

export function loadCheckinsFailure(error) {
  return {
    type: '@checkin/LOAD_FAILURE',
    payload: { error },
  };
}

// MAKE CHECKIN

export function makeCheckinRequest(id) {
  return {
    type: '@checkin/CHECKIN_REQUEST',
    payload: { id },
  };
}

export function makeCheckinSuccess() {
  return {
    type: '@checkin/CHECKIN_SUCCESS',
  };
}

export function makeCheckinFailure() {
  return {
    type: '@checkin/CHECKIN_FAILURE',
  };
}
