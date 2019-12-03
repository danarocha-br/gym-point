import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isThisMonth, parseISO, getHours } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { makeCheckinRequest } from '~/store/reducers/checkins/actions';
import { loadCheckinsRequest } from '../../store/reducers/checkins/actions';

import { Animated } from 'react-native';

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
import { SkeletonContent, SkeletonGraph } from './Skeleton';

const Dashboard = () => {
  const checkins = useSelector(state => state.checkins.list);
  const isLoading = useSelector(state => state.checkins.loading);
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

  // header animation
  const [scrollOffset, setScrollOffeset] = useState(new Animated.Value(0));

  return (
    <Wrapper color="light">
      <AnimatedHeader
        style={[
          {
            height: scrollOffset.interpolate({
              inputRange: [0, 100],
              outputRange: [238, 80],
              extrapolate: 'clamp',
            }),
          },
        ]}
      >
        <Container>
          <Greeting>
            <AnimatedHeaderTitle
              style={{
                opacity: scrollOffset.interpolate({
                  inputRange: [50, 100],
                  outputRange: [1, 0],
                  extrapolate: 'clamp',
                }),
              }}
            >
              Good {getPeriodofDay()},
            </AnimatedHeaderTitle>
            <AnimatedName
              style={{
                top: scrollOffset.interpolate({
                  inputRange: [90, 100],
                  outputRange: [0, -90],
                  extrapolate: 'clamp',
                }),
              }}
            >
              {student.name}
            </AnimatedName>
          </Greeting>
          <Animated.Image
            style={{
              opacity: scrollOffset.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0],
                extrapolate: 'clamp',
              }),
            }}
            source={illustration}
            resizeMode="contain"
          />
        </Container>
      </AnimatedHeader>

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
            scrollEventThrottle={16}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: { y: scrollOffset },
                },
              },
            ])}
            data={checkins}
            extraData={checkins.length}
            keyExtractor={(item, index) => item + index}
            ListEmptyComponent={() =>
              !isLoading && (
                <Empty
                  src=""
                  title="No checkins yet"
                  content="Make your first checkin by clicking on the green add button."
                />
              )
            }
            renderItem={({ item: checkin, index }) => (
              <Checkin data={checkin} index={index} />
            )}
          />
        )}
      </Main>
    </Wrapper>
  );
};

export default Dashboard;

const AnimatedHeader = Animated.createAnimatedComponent(Header);
const AnimatedName = Animated.createAnimatedComponent(Name);
const AnimatedHeaderTitle = Animated.createAnimatedComponent(HeaderTitle);

Dashboard.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="circle-slice-1" size={25} color={tintColor} />
  ),
};
