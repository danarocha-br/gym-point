import React, { useEffect, useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '~/services/api';

import { Container, CheckinList } from './styles';
import Wrapper from '~/components/Wrapper';
import Checkin from '~/components/DataDisplay/Checkin';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const [checkins, setCheckins] = useState([]);
  const studentId = useSelector(state => state.student.student.id);

  useEffect(() => {
    async function loadCheckins() {
      const response = await api.get(`students/${studentId}/checkins`);
      setCheckins(response.data);
    }
    loadCheckins();
  }, []);

  return (
    <Wrapper color="light">
      <Container>
        <CheckinList
          data={checkins}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Checkin data={item} />}
        />
      </Container>
    </Wrapper>
  );
};

export default Dashboard;

Dashboard.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="circle-slice-1" size={25} color={tintColor} />
  ),
};
