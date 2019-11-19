import React from 'react';
import { StatusBar } from 'react-native';
import Test from '~/Test';

export default function App() {
  return (
    <>
      <Test></Test>
      <StatusBar barStyle="dark-content" />
    </>
  );
}
