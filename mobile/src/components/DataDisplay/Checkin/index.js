import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { parseISO, formatRelative } from 'date-fns';

import { Animated } from 'react-native';
import { Container, Title, Time } from './styles';

export default function Checkin({ data, index }) {
  const [isAnimated] = useState(new Animated.Value(-100));

  useEffect(() => {
    Animated.sequence([
      Animated.delay(index * 50),
      Animated.spring(isAnimated, {
        toValue: 1,
        duration: 300,
        delay: 200,
      }),
    ]).start();
  });

  const dateParsed = useMemo(() => {
    return (
      data.createdAt &&
      formatRelative(parseISO(data.createdAt), new Date(), {
        addSuffix: true,
      })
    );
  }, [data.createdAt]);

  const count = index + 1;

  return (
    <AnimatedContainer
      style={{
        transform: [
          {
            translateY: isAnimated.interpolate({
              inputRange: [0, 1],
              outputRange: [-300, 1],
            }),
          },
        ],
      }}
    >
      <Title>Check-in {count}</Title>
      <Time>{!data.createdAt ? 'right now' : dateParsed}</Time>
    </AnimatedContainer>
  );
}

const AnimatedContainer = Animated.createAnimatedComponent(Container);

Checkin.propTypes = {
  /**
   * Defines the data for the component.
   */
  data: PropTypes.object.isRequired,
  /**
   * Defines the count for the component.
   */
  index: PropTypes.number.isRequired,
};
