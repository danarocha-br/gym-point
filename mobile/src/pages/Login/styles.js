import styled from 'styled-components/native';
import { Platform } from 'react-native';

import Input from '~/components/Input';
import colors from '~/styles/colors';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
  backgroundColor: colors.purple,
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 30px;
`;

export const Logo = styled.Image`
  margin-bottom: 60px;
`;
