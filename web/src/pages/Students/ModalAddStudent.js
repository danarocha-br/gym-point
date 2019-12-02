import React from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { addStudentRequest } from '~/store/reducers/students/actions';

import Modal from '~/components/Modal';
import Form from '~/components/Form';
import TextInput from '~/components/Form/TextInput';
import DatePicker from '~/components/Form/DatePicker';
import Button from '~/components/Button';

export default function ModalAddStudent() {
  const isLoading = useSelector(state => state.students.loading);

  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    name: Yup.string().required('Please insert the student name'),
    email: Yup.string()
      .email()
      .required('Please insert the student e-mail'),
    birthday: Yup.date().required('Please insert the student birthday'),
    weight: Yup.number()
      .positive()
      .required('Please insert the student weight'),
    height: Yup.number()
      .positive()
      .required('Please insert the student height'),
  });

  function handleSubmit({ name, email, birthday, weight, height }) {
    dispatch(addStudentRequest(name, email, birthday, weight, height));
  }
  return (
    <Modal title="Add New Student">
      <Form onSubmit={handleSubmit} schema={schema}>
        <TextInput name="name" title="Name" required />
        <TextInput name="email" type="email" title="Email" required />
        <DatePicker name="birthday" />
        <TextInput name="height" title="Height" required />
        <TextInput name="weight" title="Weight" required />
        <Button label="Add Student" isLoading={isLoading} />
      </Form>
    </Modal>
  );
}
