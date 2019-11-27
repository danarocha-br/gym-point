import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Form, FormInput, Logo } from './styles';
import { loadStudentRequest } from '~/store/reducers/student/actions';

import Wrapper from '~/components/Wrapper';
import Button from '~/components/Button';
import logo from '~/assets/logo.png';

export default function Login() {
  const dispatch = useDispatch();

  const [studentId, setStudentId] = useState('');
  const isLoading = useSelector(state => state.enrollment.loading);

  function handleSubmit() {
    dispatch(loadStudentRequest(studentId));
  }

  return (
    <Container>
      <Logo source={logo} />

      <Form>
        <FormInput
          icon="account-box"
          keyboardType="number-pad"
          autocorrect={false}
          autoCapitalize="none"
          placeholder="Your Enrollment ID"
          returnKeyType="send"
          onSubmitEdditing={handleSubmit}
          value={studentId}
          onChangeText={setStudentId}
        />
        <Button fullWidth onPress={handleSubmit} isLoading={isLoading}>
          Login
        </Button>
      </Form>
    </Container>
  );
}
