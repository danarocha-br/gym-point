import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { Wrapper, Col, Container } from './styles';
import logo from '~/assets/logoNegative.svg';
import Card from '~/components/Card';
import Button from '~/components/Button';
import Form from '~/components/Form';
import TextInput from '~/components/Form/TextInput';

import { signInRequest } from '~/store/reducers/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Please insert a valid email.')
    .required('Email is mandatory.'),
  password: Yup.string().required('Password is mandatory.'),
});

export default function Login() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Wrapper>
        <img src={logo} alt="logo" />

        <Container>
          <Col>
            <h1>Welcome Back,</h1>
            <h2>Sign in to continue</h2>
          </Col>

          <Col>
            <Card>
              <Form schema={schema} onSubmit={handleSubmit}>
                <TextInput
                  name="email"
                  title="Your e-mail"
                  type="email"
                  required
                />
                <TextInput
                  name="password"
                  title="Your Password"
                  type="password"
                  required
                />

                <Button label="Login" isLoading={isLoading} onSubmit />
              </Form>
            </Card>
          </Col>
        </Container>
      </Wrapper>
    </>
  );
}
