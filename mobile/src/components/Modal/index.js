import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';

import { Animated, SafeAreaView, Dimensions } from 'react-native';
import { Container, Header, Title, BackButton } from './styles';
import { hideModal } from '~/store/reducers/modals/actions';

const screenHeight = Dimensions.get('window').height;

const Modal = props => {
  const dispatch = useDispatch();
  const [topAnimation] = useState(new Animated.Value(screenHeight));
  const modal = useSelector(state => state.modals.modal);

  useEffect(() => {
    if (modal === null) {
      Animated.spring(topAnimation, {
        toValue: screenHeight,
        duration: 300,
      }).start();
    }
    if (modal !== null) {
      Animated.spring(topAnimation, {
        toValue: 50,
        duration: 200,
      }).start();
    }
  }, [modal]);

  return (
    <AnimatedContainer style={{ top: topAnimation }}>
      <SafeAreaView>
        <Header>
          <Title>{props.title}</Title>
          <BackButton onPress={() => dispatch(hideModal())}>
            <Icon name="close" size={26} color={colors.greyMd} />
          </BackButton>
        </Header>
        {props.children}
      </SafeAreaView>
    </AnimatedContainer>
  );
};

Modal.propTypes = {
  /**
   * Sets the size of a button.
   */
  title: PropTypes.string,
};

export default Modal;

const AnimatedContainer = Animated.createAnimatedComponent(Container);
