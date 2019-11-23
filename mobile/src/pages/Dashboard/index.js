import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isThisMonth, parseISO, getHours } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { makeCheckinRequest } from '~/store/reducers/checkins/actions';
import api from '~/services/api';

import { Alert } from 'react-native';
import {
  Main,
  CheckinList,
  HeaderTitle,
  Name,
  Image,
  Greeting,
  Container,
  Title,
} from './styles';
import { Header } from '~/styles/layout';
import Wrapper from '~/components/Wrapper';
import Checkin from '~/components/DataDisplay/Checkin';
import illustration from '~/assets/Illustration.png';
import ChartsContainer from './Charts';
import { loadCheckinsRequest } from '../../store/reducers/checkins/actions';

const Dashboard = () => {
  // const [checkins, setCheckins] = useState([]);

  const checkins = useSelector(state => state.checkins.list);
  const student = useSelector(state => state.enrollment.profile.student);
  const studentId = student.id;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCheckinsRequest(studentId));
  }, []); // eslint-disable-line

  function handleCheckin() {
    dispatch(makeCheckinRequest(studentId));
  }

  // Checkin current week count
  const count = useMemo(
    () =>
      checkins && checkins.map(checkin => checkin.count).filter(Boolean).length,
    [checkins]
  );

  // Checkin current month count
  const currentMonth =
    checkins &&
    checkins.map(checkin => isThisMonth(parseISO(checkin.createdAt)));

  const countMonth =
    checkins && useMemo(() => currentMonth.filter(Boolean).length, [checkins]);

  // // Calculations
  const checkinsLeftPercent = count * 20;
  const checkinsThisMonth = countMonth * 5;
  const totalCheckins = checkins && checkins.length * 0.4166;

  // Time of the day for greeting
  const time = getHours(new Date());

  function getPeriodofDay() {
    if (time > 5 && time < 12) return 'morning';
    if (time > 12 && time < 18) return 'afternoon';
    return 'night';
  }

  return (
    <Wrapper color="light">
      <Header>
        <Container>
          <Greeting>
            <HeaderTitle>Good </HeaderTitle>
            <HeaderTitle>{getPeriodofDay()}</HeaderTitle>
            <Name>{student.name}</Name>
          </Greeting>
          <Image source={illustration} resizeMode="contain" />
        </Container>
      </Header>

      <Main>
        <Title>Checkin Status</Title>
        {checkins && (
          <>
            <ChartsContainer
              checkins={checkins}
              current={checkinsLeftPercent}
              month={checkinsThisMonth}
              monthCalc={countMonth}
              total={totalCheckins}
              onCheckin={handleCheckin}
            />

            <CheckinList
              data={checkins}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => <Checkin data={item} />}
            />
          </>
        )}
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
