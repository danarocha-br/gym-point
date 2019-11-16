import React from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '@rocketseat/unform';

import { addPlanRequest } from '~/store/reducers/plans/actions';

import Modal from '~/components/Modal';
import Form from '~/components/Form';
import Button from '~/components/Button';

export default function ModalAddPlan() {
  const dispatch = useDispatch();

  function handleSubmit({ title, duration, price }) {
    dispatch(addPlanRequest(title, duration, price));
  }
  return (
    <Modal title="Add New Plan">
      <Form onSubmit={handleSubmit}>
        <Input name="title" placeholder="Plan title" />
        <Input name="duration" type="number" placeholder="Plan duration" />
        <Input name="price" type="number" placeholder="Plan price" />
        <Button label="Add Plan" />
      </Form>
    </Modal>
  );
}
