import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import posed from 'react-pose';

const Container = posed.ul({
  start: {
    delayChildren: 200,
    staggerChildren: 50,
  },
  end: { delay: 300 },
});

export default function StatsContainer({ children }) {
  const [isAnimated, setAnimation] = useState(false);

  useEffect(() => {
    setTimeout(setAnimation({ isAnimated: !isAnimated }), 500);
  }, [isAnimated]);

  return <Container pose={isAnimated ? 'start' : 'end'}>{children}</Container>;
}

StatsContainer.propTypes = {
  /**
   * Inserts the children components.
   */
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
  ]).isRequired,
};
