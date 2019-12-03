import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';

import { Container, Label, Data } from './styles';

const Item = posed.li({
  start: { x: 0, opacity: 1 },
  end: { x: -300, opacity: 0 },
});

export default function Stats({ label, data }) {
  return (
    <Item>
      <Container>
        <Label>{label}</Label>
        <Data>{data}</Data>
      </Container>
    </Item>
  );
}

Stats.propTypes = {
  /**
   * Defines the title for the stat.
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * Defines the data for the stat.
   */
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
