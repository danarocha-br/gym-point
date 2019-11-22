import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';
import Wrapper from '~/components/Wrapper';
import Input from '~/components/Input';

export default function Login() {
  return (
    <Wrapper>
      <Input style={{ marginTop: 30 }} icon="account" placeholder="Tets" />
    </Wrapper>
  );
}
