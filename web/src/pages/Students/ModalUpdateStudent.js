import React from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { updateStudentRequest } from '~/store/reducers/students/actions';

import Modal from '~/components/Modal';
import Form from '~/components/Form';
import TextInput from '~/components/Form/TextInput';
import Button from '~/components/Button';

export default function ModalAddStudent({ student }) {
  const isLoading = useSelector(state => state.students.loading);

  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string().email(),
    birthday: Yup.date(),
    weight: Yup.number().positive(),
    height: Yup.number().positive(),
  });

  const { id } = student;

  function handleSubmit({ name, email, birthday, weight, height }) {
    dispatch(updateStudentRequest(id, name, email, birthday, weight, height));
  }

  return (
    <Modal title={`Edit ${student.name} Details:`}>
      <Form schema={schema} initialData={student} onSubmit={handleSubmit}>
        <TextInput name="name" title="Name" />
        <TextInput name="email" type="email" title="E-mail" />
        <TextInput name="birthday" title="E-mail" />
        <TextInput name="height" title="Height" />
        <TextInput name="weight" title="Weight" />
        <Button label="Update Data" isLoading={isLoading} />
      </Form>
    </Modal>
  );
}
