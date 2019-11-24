import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { parseISO, formatRelative } from 'date-fns';

import { Container, Title, Time } from './styles';

export default function Checkin({ data, index }) {
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
    <Container>
      <Title>Check-in {count}</Title>
      <Time>{!data.createdAt ? 'right now' : dateParsed}</Time>
    </Container>
  );
}

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
