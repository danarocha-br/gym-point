import React from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { updatePlanRequest } from '~/store/reducers/plans/actions';

import Modal from '~/components/Modal';
import Form from '~/components/Form';
import TextInput from '~/components/Form/TextInput';
import Button from '~/components/Button';

export default function ModalUpdatePlan({ plan }) {
  const isLoading = useSelector(state => state.plans.loading);

  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    title: Yup.string(),
    duration: Yup.number().positive(),
    price: Yup.number().positive(),
  });

  const { id, price } = plan;

  const unformattedPrice = price.split('$', 2)[1];

  const initialData = {
    ...plan,
    price: unformattedPrice,
  };

  function handleSubmit({ title, duration, price }) {
    dispatch(updatePlanRequest(id, title, duration, price));
  }
  return (
    <Modal title={`Edit ${plan.title} Details:`}>
      <Form schema={schema} initialData={initialData} onSubmit={handleSubmit}>
        <TextInput name="title" title="Plan title" />
        <TextInput name="duration" type="number" title="Plan duration" />
        <TextInput name="price" type="number" title="Plan price" />
        <Button label="Update Plan" isLoading={isLoading} />
      </Form>
    </Modal>
  );
}
