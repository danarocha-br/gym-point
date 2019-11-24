import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '~/styles/colors';

export const Container = styled(RectButton)`
  height: 60px;
  background: ${colors.primary};
  border-radius: ${props => (props.circle ? '30px' : '13px')};
  justify-content: center;
  align-items: center;
  padding-left: 2px;
  padding-top: 2px;
  width: ${props => (props.fullWidth ? '100%' : '60px')};
`;

export const Label = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;
