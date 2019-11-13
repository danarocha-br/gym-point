import React from 'react';
import PropTypes from 'prop-types';

export default function TableHeader({ columns }) {
  return (
    <thead>
      <tr>
        {columns.map(column => (
          <th className="flex-row" key={column.label || column.key}>
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}

TableHeader.propTypes = {
  /**
   * Defines the number and columns labels.
   */
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};
