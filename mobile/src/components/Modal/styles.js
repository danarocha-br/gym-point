import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  background-color: white;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 200;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
  padding-top: 30px;
  box-shadow: 0px -1px 30px rgba(0, 0, 0, 0.25);
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding: 0 20px;
  width: 100%;
  height: 45px;
`;

export const Title = styled.Text`
  color: ${colors.greyDark};
  font-size: 16;
  font-weight: 600;
  align-items: center;
  padding-top: 2px;
`;

export const BackButton = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  flex-direction: row;
  justify-content: flex-end;
  align-content: center;
  margin-left: auto;
`;
