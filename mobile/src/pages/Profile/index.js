import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { View } from 'react-native';

// import { Container } from './styles';

export default function Profile() {
  return <View />;
}

Profile.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="account-circle-outline" size={25} color={tintColor} />
  ),
};
