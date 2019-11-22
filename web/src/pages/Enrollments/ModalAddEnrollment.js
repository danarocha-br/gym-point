import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@rocketseat/unform';

import { addEnrollmentRequest } from '~/store/reducers/enrollments/actions';

import Modal from '~/components/Modal';
import Form from '~/components/Form';
import Button from '~/components/Button';

export default function ModalAddEnrollment() {
  const isLoading = useSelector(state => state.enrollments.loading);

  const dispatch = useDispatch();

  function handleSubmit({ student_id, plan_id, start_date }) {
    dispatch(addEnrollmentRequest(student_id, plan_id, start_date));
  }
  return (
    <Modal title="Make a New Enrollment">
      <Form onSubmit={handleSubmit}>
        <Input name="student_id" type="number" placeholder="Student ID" />
        <Input name="plan_id" type="number" placeholder="Plan ID" />
        <Input name="start_date" placeholder="Start Date" />
        <Button label="Make an Enrollment" isLoading={isLoading} />
      </Form>
    </Modal>
  );
}
