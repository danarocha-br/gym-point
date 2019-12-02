import React from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { addEnrollmentRequest } from '~/store/reducers/enrollments/actions';

import Modal from '~/components/Modal';
import Form from '~/components/Form';
import TextInput from '~/components/Form/TextInput';
import DatePicker from '~/components/Form/DatePicker';
import Button from '~/components/Button';

export default function ModalAddEnrollment() {
  const isLoading = useSelector(state => state.enrollments.loading);

  const dispatch = useDispatch();

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
  return (
    <Modal title="Make a New Enrollment">
      <Form schema={schema} onSubmit={handleSubmit}>
        <TextInput
          name="student_id"
          type="number"
          title="Student ID"
          required
        />
        <TextInput name="plan_id" type="number" title="Plan ID" required />
        <DatePicker name="start_date" />
        <Button label="Make an Enrollment" isLoading={isLoading} />
      </Form>
    </Modal>
  );
}
