import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';

import { Dimensions, View, Animated } from 'react-native';
import { loadOrdersRequest } from '~/store/reducers/orders/actions';
import { showModal } from '~/store/reducers/modals/actions';

import { Container, Header, Title } from '~/styles/layout';
import { OrderList, LabelChart, Label } from './styles';

import Wrapper from '~/components/Wrapper';
import Order from '~/components/DataDisplay/Order';
import Button from '~/components/Button';
import AddNew from './AddNew';
import colors from '~/styles/colors';

export default function Orders({ navigation }) {
  const orders = useSelector(state => state.orders.list);
  const student = useSelector(state => state.enrollment.profile.student);
  const studentId = student.id;
  const isLoading = useSelector(state => state.orders.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadOrdersRequest(studentId));
  }, []); // eslint-disable-line

  // Open Modal
  const screenHeight = Dimensions.get('window').height;
  const modal = useSelector(state => state.modals.modal);
  const [modalAnimation] = useState(new Animated.Value(-screenHeight));
  const [backgroundAnimation] = useState(new Animated.Value(1));

  useEffect(() => {
    if (modal === null) {
      Animated.spring(modalAnimation, {
        toValue: -screenHeight,
        duration: 300,
      }).start();

      Animated.spring(backgroundAnimation, {
        toValue: 1,
      }).start();
    }
  }, [modal]);

  function handleShowModal() {
    dispatch(showModal());

    Animated.spring(modalAnimation, {
      toValue: 70,
      duration: 200,
    }).start();

    Animated.spring(backgroundAnimation, {
      toValue: 0.9,
    }).start();
  }

  // get status for the chart
  const questionsCount = orders && orders.length;
  const answer = orders && orders.map(order => order.answer);
  const answersCount = answer && answer.filter(item => item !== null).length;
  const ordersResult =
    orders.length === 0
      ? 0
      : (Math.round((answersCount / questionsCount) * 100) * 100) / 100;

  return (
    <>
      <AnimatedContainer style={{ top: modalAnimation, zIndex: 10 }}>
        <AddNew />
      </AnimatedContainer>

      <Wrapper color="light">
        <Header>
          <Title>Help Orders</Title>
        </Header>

        <AnimatedBackground
          style={{
            transform: [{ scale: backgroundAnimation }],
            opacity: backgroundAnimation,
            marginLeft: -5,
            marginRight: -5,
          }}
        >
          <AnimatedCircularProgress
            size={100}
            width={5}
            fill={ordersResult}
            tintColor={colors.primary}
            backgroundColor={colors.greyLight}
            lineCap="round"
          >
            {fill => <LabelChart>{ordersResult}%</LabelChart>}
          </AnimatedCircularProgress>
          <Label>Answered Questions</Label>

          {isLoading ? (
            <ContentLoader
              height={300}
              width={400}
              speed={2}
              primaryColor="#f3f3f3"
              secondaryColor={colors.greyLight}
            >
              <Circle cx="50" cy="50" r="40" />
              <Circle cx="180" cy="50" r="40" />
              <Circle cx="300" cy="50" r="40" />
            </ContentLoader>
          ) : (
            <OrderList
              data={orders}
              extraData={orders}
              keyExtractor={order => String(order.id)}
              renderItem={({ item: order }) => (
                <Order
                  data={order}
                  onPress={() => navigation.navigate('OrderDetails', { order })}
                />
              )}
            />
          )}

          <View
            style={{
              alignItems: 'flex-end',
              width: '100%',
              position: 'absolute',
              bottom: 30,
            }}
          >
            <Button circle onPress={handleShowModal}>
              <Icon name="plus" size={40} />
            </Button>
          </View>
        </AnimatedBackground>
      </Wrapper>
    </>
  );
}

const AnimatedContainer = Animated.createAnimatedComponent(View);
const AnimatedBackground = Animated.createAnimatedComponent(Container);

Orders.navigationOptions = {
  headerShown: false,
};
