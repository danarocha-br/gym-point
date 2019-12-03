import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { parseISO, formatRelative } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Animated } from 'react-native';
import { Container, Title, Time, Group, Content } from './styles';
import colors from '~/styles/colors';

export default function Order({ data, onPress, index }) {
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

  const answered = useMemo(() => !data.answer);

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
      answered={answered}
      onPress={onPress}
    >
      <Group>
        <Title answered={answered}>Answered</Title>
        <Icon
          name="check-circle"
          size={20}
          color={!answered ? colors.green : colors.greyLight}
        />
      </Group>

      <Time>{!data.createdAt ? 'right now' : dateParsed}</Time>

      <Content answered={answered} numberOfLines={3}>
        {data.question}
      </Content>
    </AnimatedContainer>
  );
}
const AnimatedContainer = Animated.createAnimatedComponent(Container);

Order.propTypes = {
  /**
   * Defines the data for the component.
   */
  data: PropTypes.object.isRequired,
};
