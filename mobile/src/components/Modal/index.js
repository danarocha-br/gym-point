import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';

import { Animated, SafeAreaView, Dimensions } from 'react-native';
import { Container, Header, Title, BackButton } from './styles';
import colors from '~/styles/colors';
import { hideModal } from '~/store/reducers/modals';

const screenHeight = Dimensions.get('window').height;

const Modal = (props, { title }) => {
  const [topAnimation] = useState(new Animated.Value(screenHeight));

  const dispatch = useDispatch();
  const modal = useSelector(state => state.modals.modal);

  const handleShowModal = () => {
    if (modal === null) {
      Animated.spring(topAnimation, {
        toValue: screenHeight,
      }).start();
    }

    return Animated.spring(topAnimation, {
      toValue: 50,
    }).start();
  };

  useEffect(() => {
    handleShowModal();
  }, [modal]);

  return (
    <AnimatedContainer style={{ top: topAnimation }}>
      <SafeAreaView>
        <Header>
          <Title>{title}</Title>
          <BackButton onPress={() => dispatch(hideModal())}>
            <AntDesign name="close" size={22} color={colors.greyMedium} />
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
