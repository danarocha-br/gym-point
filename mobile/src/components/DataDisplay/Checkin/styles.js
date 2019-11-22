import styled from 'styled-components/native';

import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 20px;
  background-color: white;
  border-radius: 10px;
  height: 60px;
`;

export const Title = styled.Text`
  color: ${colors.greyDark};
  font-size: 17px;
  font-weight: 600;
`;

export const Time = styled.Text`
  color: ${colors.greyDark};
  font-size: 14px;
  text-align: right;
`;
