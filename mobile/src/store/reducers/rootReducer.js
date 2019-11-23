import { combineReducers } from 'redux';

import student from './student';
import checkins from './checkins';

export default combineReducers({
  enrollment: student,
  checkins,
});
