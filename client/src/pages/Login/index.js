import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Wrapper, Col, Container } from './styles';
import logo from '~/assets/logo.svg';
import Card from '~/components/Card';
import Button from '~/components/Button';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Please insert a valid email.')
    .required('Email is mandatory.'),
  password: Yup.string().required('Password is mandatory.'),
});

export default function Login() {
  function handleSubmit(data) {
    console.tron.log(data);
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
                <Input name="email" type="email" placeholder="Your email" />
                <Input
                  name="password"
                  type="passord"
                  placeholder="Your passord"
                />

                <Button label="Login" onSubmit />
              </Form>
            </Card>
          </Col>
        </Container>
      </Wrapper>
    </>
  );
}
