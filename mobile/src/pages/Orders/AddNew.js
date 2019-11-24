import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { hideModal } from '~/store/reducers/modals/actions';
import { questionOrderRequest } from '~/store/reducers/orders/actions';

import { Container, Form, FormInput, CloseBtn } from './styles';
import Button from '~/components/Button';

export default function AddNew() {
  const dispatch = useDispatch();

  const [question, setQuestion] = useState('');
  const isLoading = useSelector(state => state.orders.loading);
  const id = useSelector(state => state.enrollment.profile.student.id);

  function handleSubmit() {
    dispatch(questionOrderRequest(id, question));
  }

  function handleCloseModal() {
    dispatch(hideModal());
  }

  return (
    <Container>
      <Form>
        <CloseBtn onPress={handleCloseModal}>
          <Icon name="close" size={26} color="#fff" />
        </CloseBtn>
        <FormInput
          autocorrect={false}
          autoCapitalize="none"
          placeholder="What is your questions?"
          returnKeyType="send"
          onSubmitEdditing={handleSubmit}
          value={question}
          onChangeText={setQuestion}
          multiline={true}
          numberOfLines={10}
        />
        <Button fullWidth onPress={handleSubmit} isLoading={isLoading}>
          Send
        </Button>
      </Form>
    </Container>
  );
}
