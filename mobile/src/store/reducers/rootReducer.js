import { combineReducers } from 'redux';

import student from './student';
import checkins from './checkins';
import orders from './orders';
import modals from './modals';

export default combineReducers({
  enrollment: student,
  checkins,
  orders,
  modals,
});
