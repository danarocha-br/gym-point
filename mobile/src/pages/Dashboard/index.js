import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, CheckinList } from './styles';
import Wrapper from '~/components/Wrapper';
import Checkin from '~/components/DataDisplay/Checkin';

const data = [1, 2, 3, 4, 5];

const Dashboard = () => (
  <Wrapper color="light">
    <Container>
      <CheckinList
        data={data}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Checkin data={item} />}
      />
    </Container>
  </Wrapper>
);

export default Dashboard;

Dashboard.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="circle-slice-1" size={25} color={tintColor} />
  ),
};
