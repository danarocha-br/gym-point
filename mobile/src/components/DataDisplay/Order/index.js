import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { parseISO, formatRelative } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, Title, Time, Group, Content } from './styles';
import colors from '~/styles/colors';

export default function Order({ data, onPress }) {
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
    <Container answered={answered} onPress={onPress}>
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
    </Container>
  );
}

Order.propTypes = {
  /**
   * Defines the data for the component.
   */
  data: PropTypes.object.isRequired,
};
