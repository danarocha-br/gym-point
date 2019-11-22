import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const CheckinList = styled.FlatList.attrs({
  contentContainerStyle: { padding: 20 },
  showsVerticalScrollIndicator: false,
})`
  color: white;
`;
