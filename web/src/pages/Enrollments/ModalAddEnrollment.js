import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { addEnrollmentRequest } from '~/store/reducers/enrollments/actions';
import { loadStudentsRequest } from '~/store/reducers/students/actions';

import Modal from '~/components/Modal';
import Form from '~/components/Form';
import TextInput from '~/components/Form/TextInput';
import DatePicker from '~/components/Form/DatePicker';
import Select from '~/components/Form/Select';
import Button from '~/components/Button';
import AsyncSelect from 'react-select/async';

export default function ModalAddEnrollment() {
  const isLoading = useSelector(state => state.enrollments.loading);
  const students = useSelector(state => state.students.list) || [];
  const dispatch = useDispatch();

  // get students

  useEffect(() => {
    dispatch(loadStudentsRequest());
  }, []); // eslint-disable-line

  // function getStudents() {
  //   students.map(stud => {
  //     const student = {
  //       id: stud.id,
  //       title: stud.name,
  //     };
  //     return student;
  //   });
  // }

  const getStudents = inputValue => {
    return students.filter(i =>
      i.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const schema = Yup.object().shape({
    student_id: Yup.number()
      .positive()
      .required('Please insert the student ID'),
    plan_id: Yup.number()
      .positive()
      .required('Please insert the plan ID'),
    start_date: Yup.date().required('Please select a date'),
  });

  function handleSubmit({ student_id, plan_id, start_date }) {
    dispatch(addEnrollmentRequest(student_id, plan_id, start_date));
  }

  const promiseOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(getStudents(inputValue));
      }, 1000);
    });

  return (
    <Modal title="Make a New Enrollment">
      <Form schema={schema} onSubmit={handleSubmit}>
        <Select
          cacheOptions
          // defaultOptions={getStudents}
          // loadOptions={promiseOptions}
          options={getStudents}
        />

        <TextInput name="plan_id" type="number" title="Plan ID" required />
        <DatePicker name="start_date" />
        <TextInput name="end_date" type="number" title="End Date" disabled />

        <Button label="Make an Enrollment" isLoading={isLoading} />
      </Form>
    </Modal>
  );
}
