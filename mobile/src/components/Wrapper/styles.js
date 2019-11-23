import styled from 'styled-components/native';

import colors from '~/styles/colors';

export const Container = styled.View`
  background-color: ${props =>
    props.color === 'light' ? colors.greyLightest : colors.purple};
  flex: 1;
  width: 100%;
`;
