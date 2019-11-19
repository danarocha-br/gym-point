import React from 'react';
import PropTypes from 'prop-types';

import { Container, Label, Data } from './styles';

export default function Stats({ label, data }) {
  return (
    <Container>
      <Label>{label}</Label>
      <Data>{data}</Data>
    </Container>
  );
}

Stats.propTypes = {
  /**
   * Defines the title for the stat.
   */
  label: PropTypes.string.isRequired,
  /**
   * Defines the data for the stat.
   */
  data: PropTypes.string.isRequired,
};
