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
  updateStudentSuccess,
  updateStudentFailure,
  addStudentSuccess,
} from './actions';

import { hideModal } from '../modals/actions';

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
    const response = yield call(api.post, '/students', payload);

    toast.success('Student added successfully.');

    yield put(hideModal());
    yield put(addStudentSuccess(response.data));
  } catch (error) {
    toast.error(
      `There was an error when adding the student: ${error.response.data.error}`
    );
    yield put(addStudentFailure(error));
  }
}

export function* updateStudent({ payload }) {
  try {
    const { id, name, email, birthday, weight, height } = payload;
    const parsedBirthday = parseISO(birthday);

    const data = {
      ...payload.data,
      birthday: parsedBirthday,
    };

    const response = yield call(api.put, `/students/${id}`, data);
    toast.success('Student successfully updated.');

    yield put(updateStudentSuccess(response.data));

    yield put(hideModal());
  } catch (error) {
    toast.error(
      `There was an error when updating the student: ${error.response.data.error}`
    );
    yield put(updateStudentFailure());
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
  takeLatest('@student/UPDATE_REQUEST', updateStudent),
  takeLatest('@student/DELETE_REQUEST', deleteStudent),
]);
