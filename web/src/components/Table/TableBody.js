import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default function TableBody({ data, columns }) {
  function createKey(item, column) {
    return item.id + (column.path || column.key);
  }

  function renderCell(item, column) {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  }

  return (
    <tbody>
      {data.map(item => (
        <tr key={item.id}>
          {columns.map(column => (
            <td key={createKey(item, column)}>
              {renderCell(item, column)}
              {column.suffix && ` ${column.suffix}`}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
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
