import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 60px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255, 0.5)',
})`
  flex: 1;
  font-size: 16px;
  margin-left: 10px;
  color: #fff;
`;
