import React from 'react';
import { Input } from '@rocketseat/unform';

// import { Container } from './styles';

import Modal from '~/components/Modal';
import Form from '~/components/Form';

export default function ModalAddStudent({ student }) {
  return (
    <Modal title={`Edit ${student.name} Details:`}>
      <Form initialData={student}>
        <Input name="name" placeholder="Your password" />
        <Input name="email" type="email" placeholder="Your password" />
        <Input name="birthday" placeholder="Your password" />
        <Input name="weight" placeholder="Your password" />
        <Input name="height" placeholder="Your password" />
      </Form>
    </Modal>
  );
}
