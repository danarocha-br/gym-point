import React from 'react';
import PropTypes from 'prop-types';

import { Container, Image, Title, Content } from './styles';
import empty from '~/assets/empty.png';

export default function Empty({ title, content }) {
  return (
    <Container>
      <Image source={empty} resizeMode="center" />
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Container>
  );
}

Empty.propTypes = {
  /**
   * Defines the title for the empty view.
   */
  title: PropTypes.string.isRequired,
  /**
   * Defines the title for the empty view.
   */
  content: PropTypes.string.isRequired,
};
