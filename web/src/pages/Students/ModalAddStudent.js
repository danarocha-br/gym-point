import React from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '@rocketseat/unform';

import { addStudentRequest } from '~/store/reducers/students/actions';

import Modal from '~/components/Modal';
import Form from '~/components/Form';
import Button from '~/components/Button';

export default function ModalAddStudent() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, birthday, weight, height }) {
    dispatch(addStudentRequest(name, email, birthday, weight, height));
  }
  return (
    <Modal title="Add New Student">
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Student name" />
        <Input name="email" type="email" placeholder="Student email" />
        <Input name="birthday" placeholder="Student birthday" />
        <Input name="weight" placeholder="Student weight" />
        <Input name="height" placeholder="Student height" />
        <Button label="Add Student" />
      </Form>
    </Modal>
  );
}
