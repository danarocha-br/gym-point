import React from 'react';
import { useDispatch } from 'react-redux';
import { Textarea } from '@rocketseat/unform';

import { answerOrderRequest } from '~/store/reducers/helpOrders/actions';
import { Question } from './styles';

import Modal from '~/components/Modal';
import Form from '~/components/Form';
import Button from '~/components/Button';

export default function ModalAnswerOrder({ order }) {
  const dispatch = useDispatch();

  const { id, student, question } = order;

  function handleSubmit({ answer }) {
    dispatch(answerOrderRequest(id, answer));
  }
  return (
    <Modal title={`${student}'s question:`}>
      <Form onSubmit={handleSubmit}>
        <Question>{question}</Question>
        <Textarea name="answer" rows="10" placeholder="Answer..." />
        <Button label="Answer Order" />
      </Form>
    </Modal>
  );
}
