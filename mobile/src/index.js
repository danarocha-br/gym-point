import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';
import colors from '~/styles/colors';

export default function src() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.purple} />
      <Routes />
    </>
  );
}
