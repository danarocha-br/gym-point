import React from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '@rocketseat/unform';

import { updateEnrollmentRequest } from '~/store/reducers/enrollments/actions';

import Modal from '~/components/Modal';
import Form from '~/components/Form';
import Button from '~/components/Button';

export default function ModalAddEnrollment({ enrollment }) {
  const dispatch = useDispatch();

  const { id, student } = enrollment;
  console.tron.log(enrollment);

  function handleSubmit({ plan_id, start_date }) {
    dispatch(updateEnrollmentRequest(id, plan_id, start_date));
  }
  return (
    <Modal title={`Update ${student} `}>
      <Form initialData={enrollment} onSubmit={handleSubmit}>
        <Input name="plan_id" type="number" placeholder="Plan ID" />
        <Input name="start_date" placeholder="Start Date" />
        <Button label="Update Enrollment" />
      </Form>
    </Modal>
  );
}
