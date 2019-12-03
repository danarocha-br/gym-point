import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import posed from 'react-pose';

const Body = posed.tbody({
  start: {
    y: '0%',
    delayChildren: 200,
    staggerChildren: 50,
  },
  end: { y: '-100%', delay: 300 },
});

const Row = posed.tr({
  start: { y: 0, opacity: 1 },
  end: { y: 20, opacity: 0 },
});

export default function TableBody({ data, columns }) {
  const [isAnimated, setAnimation] = useState(false);

  useEffect(() => {
    setTimeout(setAnimation({ isAnimated: !isAnimated }), 1000);
  }, [isAnimated]);

  function createKey(item, column) {
    return item.id + (column.path || column.key);
  }

  function renderCell(item, column) {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  }

  return (
    <Body pose={isAnimated ? 'start' : 'end'}>
      {data.map(item => (
        <Row key={item.id}>
          {columns.map(column => (
            <td key={createKey(item, column)}>
              {renderCell(item, column)}
              {column.suffix && ` ${column.suffix}`}
            </td>
          ))}
        </Row>
      ))}
    </Body>
  );
}

TableBody.propTypes = {
  /**
   * Defines the number and data labels.
   */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * Defines the number and data labels.
   */
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};
