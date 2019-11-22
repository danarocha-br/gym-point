import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { View } from 'react-native';

// import { Container } from './styles';

export default function Orders() {
  return <View />;
}

Orders.navigationOptions = {
  tabBarLabel: 'Help',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="comment-question-outline" size={25} color={tintColor} />
  ),
};
