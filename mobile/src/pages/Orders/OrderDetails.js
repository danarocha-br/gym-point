import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { parseISO, formatRelative } from 'date-fns';

import { TouchableOpacity } from 'react-native';
import {
  TitleRow,
  Title,
  Time,
  Content,
  ContentContainer,
  QuestionsWrapper,
} from './styles';

export default function OrderDetails({ navigation }) {
  const order = navigation.getParam('order');

  const questionDate = useMemo(() => {
    return (
      order.createdAt &&
      formatRelative(parseISO(order.createdAt), new Date(), {
        addSuffix: true,
      })
    );
  }, [order.createdAt]);

  const answerDate = useMemo(() => {
    return (
      order.answer_at &&
      formatRelative(parseISO(order.answer_at), new Date(), {
        addSuffix: true,
      })
    );
  }, [order.answer_at]);

  return (
    <QuestionsWrapper>
      <ContentContainer>
        <TitleRow>
          <Title>Question</Title>
          <Time>{questionDate}</Time>
        </TitleRow>
        <Content>{order.question}</Content>
      </ContentContainer>

      {order.answer && (
        <ContentContainer>
          <TitleRow>
            <Title>Answer</Title>
            <Time>{answerDate}</Time>
          </TitleRow>
          <Content>{order.answer}</Content>
        </ContentContainer>
      )}
    </QuestionsWrapper>
  );
}

OrderDetails.navigationOptions = ({ navigation }) => ({
  title: 'Details',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Orders');
      }}
    >
      <Icon name="close" size={26} color="black" />
    </TouchableOpacity>
  ),
});

// OrderDetails.navigationOptions = {
//   tabBarVisible: false,
// };
