import React from 'react';
import PropTypes from 'prop-types';

import { TableWrapper } from './styles';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

export default function Table({ columns, data, ariaLabel }) {
  return (
    <TableWrapper role="table" aria-label={ariaLabel}>
      <TableHeader columns={columns} />
      <TableBody columns={columns} data={data} />
    </TableWrapper>
  );
}

Table.propTypes = {
  /**
   * Defines the number and columns labels.
   */
  columns: PropTypes.arrayOf.isRequired,
  /**
   * Defines the aria label for the table.
   */
  ariaLabel: PropTypes.string.isRequired,
  /**
   * Defines the data for the table.
   */
  data: PropTypes.objectOf.isRequired,
};
