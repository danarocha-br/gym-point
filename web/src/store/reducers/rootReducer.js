import { combineReducers } from 'redux';

import auth from './auth';
import user from './user';
import students from './students';
import modals from './modals';

export default combineReducers({
  auth,
  user,
  students,
  modals,
});
