import React from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Input } from '@rocketseat/unform';

import { updateStudentRequest } from '~/store/reducers/students/actions';

import Modal from '~/components/Modal';
import Form from '~/components/Form';
import Button from '~/components/Button';

export default function ModalAddStudent({ student }) {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string()
      .email()
      .required(),
    birthday: Yup.date().required(),
    weight: Yup.number()
      .positive()
      .required(),
    height: Yup.number()
      .positive()
      .required(),
  });

  const { id } = student;

  function handleSubmit({ name, email, birthday, weight, height }) {
    dispatch(updateStudentRequest(id, name, email, birthday, weight, height));
  }
  return (
    <Modal title={`Edit ${student.name} Details:`}>
      <Form schema={schema} initialData={student} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Student name" />
        <Input name="email" type="email" placeholder="Student e-mail" />
        <Input name="birthday" placeholder="Student birthday" />
        <Input name="weight" placeholder="Student weight" />
        <Input name="height" placeholder="Student height" />
        <Button label="Update Data" />
      </Form>
    </Modal>
  );
}
