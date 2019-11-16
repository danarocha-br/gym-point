import React from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '@rocketseat/unform';

import { updateStudentRequest } from '~/store/reducers/students/actions';

import Modal from '~/components/Modal';
import Form from '~/components/Form';
import Button from '~/components/Button';

export default function ModalAddStudent({ student }) {
  const dispatch = useDispatch();

  const { id } = student;

  function handleSubmit({ name, email, birthday, weight, height }) {
    dispatch(updateStudentRequest(id, name, email, birthday, weight, height));
  }
  return (
    <Modal title={`Edit ${student.name} Details:`}>
      <Form initialData={student} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Your password" />
        <Input name="email" type="email" placeholder="Your password" />
        <Input name="birthday" placeholder="Your password" />
        <Input name="weight" placeholder="Your password" />
        <Input name="height" placeholder="Your password" />
        <Button label="Update your Data" />
      </Form>
    </Modal>
  );
}
