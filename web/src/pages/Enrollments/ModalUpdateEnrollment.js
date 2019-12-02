import React from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { updateEnrollmentRequest } from '~/store/reducers/enrollments/actions';

import Modal from '~/components/Modal';
import Form from '~/components/Form';
import TextInput from '~/components/Form/TextInput';
import Button from '~/components/Button';

export default function ModalAddEnrollment({ enrollment }) {
  const isLoading = useSelector(state => state.enrollments.loading);

  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    plan_id: Yup.number().positive(),
    start_date: Yup.date(),
  });

  const { id, student } = enrollment;
  console.tron.log(enrollment);

  function handleSubmit({ plan_id, start_date }) {
    dispatch(updateEnrollmentRequest(id, plan_id, start_date));
  }
  return (
    <Modal title={`Update ${student} `}>
      <Form schema={schema} initialData={enrollment} onSubmit={handleSubmit}>
        <TextInput name="plan_id" type="number" title="Plan ID" />
        <TextInput name="start_date" title="Start Date" />
        <Button label="Update Enrollment" isLoading={isLoading} />
      </Form>
    </Modal>
  );
}
