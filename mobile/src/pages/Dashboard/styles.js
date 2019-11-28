import styled from 'styled-components/native';

import colors from '~/styles/colors';

export const Main = styled.View`
  flex: 4;
  padding: 0px 30px;
  margin-top: 30px;
`;

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CheckinList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  showsVerticalScrollIndicator: false,
})`
  color: white;
  height: 100%;
`;

export const Greeting = styled.View`
  flex: 1;
  padding: 30px;
  margin-top: 20px;
`;

export const HeaderTitle = styled.Text`
  color: #ffffff80;
  font-size: 24px;
  font-weight: bold;
`;

export const Name = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  margin-top: 13px;
`;

export const Image = styled.Image`
  flex: 1;
  position: relative;
  right: -5px;
  top: 8px;
`;

export const Title = styled.Text`
  color: ${colors.greyDark};
  font-size: 18px;
  font-weight: 600;
`;

export const Label = styled.Text`
  color: ${colors.greyMd};
  font-size: 14px;
  font-weight: 500;
  margin-top: 13px;
`;

export const LabelChart = styled.Text`
  color: ${colors.greyDark};
  font-size: 20px;
  font-weight: bold;
`;

export const Charts = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const ChartGroup = styled.View`
  align-items: center;
`;

export const CloseBtn = styled.TouchableOpacity`
  align-items: flex-end;
  position: relative;
  top: -10px;
`;
