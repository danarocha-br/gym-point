import React from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '@rocketseat/unform';

import { updatePlanRequest } from '~/store/reducers/plans/actions';

import Modal from '~/components/Modal';
import Form from '~/components/Form';
import Button from '~/components/Button';

export default function ModalUpdatePlan({ plan }) {
  const dispatch = useDispatch();

  const { id } = plan;

  function handleSubmit({ title, duration, price }) {
    dispatch(updatePlanRequest(id, title, duration, price));
  }
  return (
    <Modal title={`Edit ${plan.title} Details:`}>
      <Form initialData={plan} onSubmit={handleSubmit}>
        <Input name="title" placeholder="Plan title" />
        <Input name="duration" type="number" placeholder="Plan duration" />
        <Input name="price" type="number" placeholder="Plan price" />
        <Button label="Update Plan" />
      </Form>
    </Modal>
  );
}
