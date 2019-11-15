import { call, put, all, takeLatest } from 'redux-saga/effects';
import { format, parseISO, differenceInYears } from 'date-fns';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import {
  loadStudentsSuccess,
  loadStudentsFailure,
  addStudentFailure,
  deleteStudentSuccess,
} from './actions';

function* loadStudents({ payload }) {
  try {
    const response = yield call(api.get, 'students');

    const students = response.data.map(student => {
      const parsedBirthday = parseISO(student.birthday);
      const parsedUpdated = parseISO(student.updated_at);

      return {
        ...student,
        weight: `${student.weight} kg`,
        height: `${student.height} m`,
        birthday: `${differenceInYears(new Date(), parsedBirthday)} years old`,
        updated_at: format(parsedUpdated, 'dd/MM/yyyy'),
      };
    });

    yield put(loadStudentsSuccess(students));
  } catch (error) {
    yield put(loadStudentsFailure(error));
  }
}

function* addStudent({ payload }) {
  try {
    const { name, email, birthday, weight, height } = payload;
    yield call(api.post, 'students', {
      name,
      email,
      birthday,
      weight,
      height,
    });

    history.push('/students');
  } catch (error) {
    yield put(addStudentFailure(error));
  }
}

function* deleteStudent({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `/students/${id}`);

    yield put(deleteStudentSuccess(id));

    history.push('/students');
  } catch (error) {
    toast.error('An error ocurred. Please try again.');
    yield put(addStudentFailure(error));
  }
}

export default all([
  takeLatest('@student/LOAD_REQUEST', loadStudents),
  takeLatest('@student/ADD_REQUEST', addStudent),
  takeLatest('@student/DELETE_REQUEST', deleteStudent),
]);
