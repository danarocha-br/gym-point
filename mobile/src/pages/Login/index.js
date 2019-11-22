import React from 'react';

import { Container, Form, FormInput, Logo } from './styles';

import Wrapper from '~/components/Wrapper';
import Input from '~/components/Input';
import Button from '~/components/Button';

import logo from '~/assets/logo.png';

export default function Login() {
  function handleSubmit() {}

  return (
    <Wrapper>
      <Container>
        <Logo source={logo} />

        <Form>
          <FormInput
            icon="account-box"
            keyboardType="number-pad"
            autocorrect={false}
            autoCapitalize="none"
            placeholder="Your Student ID"
            returnKeyType="send"
            onSubmitEdditing={handleSubmit}
          />
          <Button onPress={handleSubmit}>Login</Button>
        </Form>
      </Container>
    </Wrapper>
  );
}
