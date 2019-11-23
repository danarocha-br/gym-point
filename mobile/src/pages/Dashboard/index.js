import React, { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import api from '~/services/api';

import {
  Main,
  CheckinList,
  HeaderTitle,
  Name,
  Image,
  Greeting,
  Container,
  Title,
  Label,
} from './styles';
import { Header } from '~/styles/layout';
import Wrapper from '~/components/Wrapper';
import Checkin from '~/components/DataDisplay/Checkin';
import illustration from '~/assets/Illustration.png';

const Dashboard = () => {
  const [checkins, setCheckins] = useState([]);
  const student = useSelector(state => state.student.student);
  const studentId = student.id;

  useEffect(() => {
    async function loadCheckins() {
      const response = await api.get(`students/${studentId}/checkins`);
      setCheckins(response.data);
    }
    loadCheckins();
  }, []);

  // Checkin count

  const count = useMemo(
    () => checkins.map(checkin => checkin.count).filter(Boolean).length,
    [checkins]
  );

  return (
    <Wrapper color="light">
      <Header>
        <Container>
          <Greeting>
            <HeaderTitle>Good </HeaderTitle>
            <HeaderTitle>morning</HeaderTitle>
            <Name>{student.name}</Name>
          </Greeting>
          <Image source={illustration} resizeMode="contain" />
        </Container>
      </Header>

      <Main>
        <Title>Checkin Status</Title>
        <Label>This Week</Label>
        <Label>{count}</Label>
        <CheckinList
          data={checkins}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Checkin data={item} />}
        />
      </Main>
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
