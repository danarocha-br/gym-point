import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '~/styles/colors';

export const Container = styled(RectButton)`
  height: 60px;
  background: ${colors.primary};
  border-radius: 13px;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;
