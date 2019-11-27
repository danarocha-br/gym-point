import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isThisMonth, parseISO, getHours } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { makeCheckinRequest } from '~/store/reducers/checkins/actions';
import { loadCheckinsRequest } from '../../store/reducers/checkins/actions';

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
import Empty from '~/components/Empty/';
import { SkeletonContent } from './Skeleton';

const Dashboard = () => {
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
  const count =
    checkins && checkins.map(checkin => checkin.count).filter(Boolean).length;
  // Checkin current month count
  const currentMonth =
    checkins &&
    checkins.map(checkin => isThisMonth(parseISO(checkin.createdAt)));

  const countMonth = checkins && currentMonth.filter(Boolean).length;

  // // Calculations
  const checkinsLeftPercent = (count * 100) / 5;
  const checkinsThisMonth = countMonth * 5;
  const totalCheckins = checkins && (checkins.length * 100) / 240;

  // Time of the day for greeting
  const time = getHours(new Date());

  function getPeriodofDay() {
    if (time > 5 && time < 12) return 'morning';
    if (time > 12 && time < 18) return 'afternoon';
    return 'night';
  }

  const flatList = useRef(null);

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

        {!checkins ? (
          <SkeletonGraph />
        ) : (
          <ChartsContainer
            checkins={checkins}
            current={checkinsLeftPercent}
            month={checkinsThisMonth}
            monthCalc={countMonth}
            total={totalCheckins}
            onCheckin={handleCheckin}
          />
        )}

        {!checkins ? (
          <SkeletonContent />
        ) : (
          <CheckinList
            ref={flatList}
            onContentSizeChange={() => flatList.current.scrollToEnd()}
            data={checkins}
            extraData={checkins}
            keyExtractor={item => String(item.id)}
            ListEmptyComponent={() => (
              <Empty
                src=""
                title="No checkins yet"
                content="Make your first checkin by clicking on the green add button."
              />
            )}
            renderItem={({ item, index }) => (
              <Checkin data={item} index={index} />
            )}
          />
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
