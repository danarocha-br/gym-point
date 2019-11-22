import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';
import Wrapper from '~/components/Wrapper';
import Input from '~/components/Input';
import Button from '~/components/Button';

export default function Login() {
  return (
    <Wrapper>
      <Input style={{ marginTop: 30 }} icon="account" placeholder="Tets" />
      <Button>test</Button>
    </Wrapper>
  );
}
