import styled from 'styled-components/native';

export const Header = styled.SafeAreaView`
  background-color: ${colors.purple};
  border-bottom-left-radius: 37px;
  border-bottom-right-radius: 37px;
`;

export const Container = styled.View`
  flex: 3;
  align-items: center;
  padding: 25px;
`;

export const Title = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  opacity: 0.7;
  margin: 10px auto 30px;
`;
