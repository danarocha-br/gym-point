import styled from 'styled-components/native';

import colors from '~/styles/colors';

export const Container = styled.View`
  height: auto;
  margin-bottom: 10px;
  padding: 20px;
  background-color: ${props =>
    props.answered ? 'white' : colors.greyLightest};
  border: ${props => (props.answered ? 'none' : '1px solid #ddd6f3')};
  border-radius: 10px;
`;
export const Group = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  color: ${props => (props.answered ? colors.greyMd : colors.green)};
  font-size: 15px;
  font-weight: 600;
`;

export const Time = styled.Text`
  color: ${colors.greyMd};
  font-size: 13px;
  font-weight: 600;
  text-align: right;
  padding-top: 5px;
`;

export const Content = styled.Text`
  color: ${colors.greyDark};
  font-size: 14px;
`;
