import styled from 'styled-components/native';

import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  height: 200px;
`;

export const Title = styled.Text`
  color: ${colors.greyDark};
  font-size: 18px;
  margin-bottom: 20px;
`;

export const Content = styled.Text`
  color: ${colors.greyMd};
  font-size: 15px;
  text-align: center;
  margin-bottom: 20px;
`;
