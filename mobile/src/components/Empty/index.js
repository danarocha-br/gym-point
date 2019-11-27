import React from 'react';
import PropTypes from 'prop-types';

import { Container, Image, Title, Content } from './styles';

export default function Empty({ title, content, src }) {
  return (
    <Container>
      <Image source={src} />
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Container>
  );
}

Empty.propTypes = {
  /**
   * Defines the illustration for the empty view.
   */
  src: PropTypes.string.isRequired,
  /**
   * Defines the title for the empty view.
   */
  title: PropTypes.string.isRequired,
  /**
   * Defines the title for the empty view.
   */
  content: PropTypes.string.isRequired,
};
