import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Dimensions, View, Animated } from 'react-native';
import { loadOrdersRequest } from '~/store/reducers/orders/actions';
import { showModal } from '~/store/reducers/modals/actions';

import { Container, Header, Title, AddButton } from '~/styles/layout';
import { OrderList } from './styles';

import Wrapper from '~/components/Wrapper';
import Order from '~/components/DataDisplay/Order';
import Button from '~/components/Button';
import AddNew from './AddNew';
import { Circle } from 'react-content-loader/native';

export default function Orders() {
  const orders = useSelector(state => state.orders.list);
  const isLoading = useSelector(state => state.orders.isLoading);
  const student = useSelector(state => state.enrollment.profile.student);
  const studentId = student.id;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadOrdersRequest(studentId));
  }, []); // eslint-disable-line

  // Open Modal
  const modal = useSelector(state => state.modals.modal);
  const [modalAnimation] = useState(new Animated.Value(70));
  const [backgroundAnimation] = useState(new Animated.Value(1));
  const screenHeight = Dimensions.get('window').height;

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
          }}
        >
          <OrderList
            data={orders}
            extraData={orders}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <Order data={item} />}
          />
          <View style={{ alignItems: 'flex-end', width: '100%' }}>
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
  tabBarLabel: 'Help',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="comment-question-outline" size={25} color={tintColor} />
  ),
};
