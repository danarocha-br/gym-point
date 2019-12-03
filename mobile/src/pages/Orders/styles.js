import styled from 'styled-components/native';

import Input from '~/components/Input';
import colors from '~/styles/colors';

export const OrderList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  showsVerticalScrollIndicator: false,
})``;

export const Container = styled.View`
  width: 100%;
  background-color: rgba(1, 1, 1, 0.85);
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
`;

export const Form = styled.View`
  align-self: stretch;
  padding: 30px 30px 30px 30px;
  height: auto;
  background-color: ${colors.purple};
`;

export const FormInput = styled(Input)`
  margin-bottom: 30px;
  height: 140px;
  align-items: flex-start;
  padding-top: 20px;
`;

export const CloseBtn = styled.TouchableOpacity`
  align-items: flex-end;
  position: relative;
  top: -10px;
`;

export const LabelChart = styled.Text`
  color: ${colors.greyDark};
  font-size: 20px;
  font-weight: bold;
`;

export const Label = styled.Text`
  color: ${colors.greyMd};
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ChartGroup = styled.View`
  color: ${colors.greyMd};
  align-items: center;
`;

export const TitleRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${colors.greyMd};
  font-size: 15px;
  font-weight: 600;
  padding-left: 20px;
  padding-right: 20px;
  text-transform: uppercase;
`;

export const Time = styled.Text`
  color: ${colors.greyMd};
  font-size: 13px;
  font-weight: 600;
  align-items: flex-start;
  margin-bottom: 15px;
  padding-right: 20px;
`;

export const Content = styled.Text`
  color: ${colors.greyDark};
  font-size: 16px;
  font-weight: 500;
  align-items: flex-start;
  margin-top: 15px;
  margin-bottom: 15px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const QuestionsWrapper = styled.SafeAreaView`
  margin: 120px 20px 20px 20px;
  padding-top: 40px;
`;

export const ContentContainer = styled.View`
  margin-bottom: 40px;
`;
