import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { parseISO, formatRelative } from 'date-fns';

import { Container, Title, Time } from './styles';

export default function Checkin({ data }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.createdAt), new Date(), {
      addSuffix: true,
    });
  }, [data.createdAt]);

  return (
    <Container>
      <Title>Check-in # 1</Title>
      <Time>{dateParsed}</Time>
    </Container>
  );
}

Checkin.propTypes = {
  /**
   * Defines the data for the component.
   */
  data: PropTypes.object.isRequired,
};
