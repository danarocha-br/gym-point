import React from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { addPlanRequest } from '~/store/reducers/plans/actions';

import Modal from '~/components/Modal';
import Form from '~/components/Form';
import TextInput from '~/components/Form/TextInput';
import Button from '~/components/Button';

export default function ModalAddPlan() {
  const isLoading = useSelector(state => state.plans.loading);

  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    title: Yup.string().required('Please insert a title.'),
    duration: Yup.number()
      .positive()
      .required('Please insert a plan duration.'),
    price: Yup.number()
      .positive()
      .required('Please insert a plan price.'),
  });

  function handleSubmit({ title, duration, price }) {
    dispatch(addPlanRequest(title, duration, price));
  }
  return (
    <Modal title="Add New Plan">
      <Form schema={schema} onSubmit={handleSubmit}>
        <TextInput name="title" title="Plan Title" required />
        <TextInput
          name="duration"
          type="number"
          title="Plan Duration"
          required
        />
        <TextInput name="price" type="number" title="Plan Price" required />

        <Button label="Add Plan" isLoading={isLoading} />
      </Form>
    </Modal>
  );
}
