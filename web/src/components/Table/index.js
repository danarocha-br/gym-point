import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

import { TableWrapper } from './styles';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

export default function Table({ columns, data, ariaLabel, isLoading }) {
  return (
    <>
      {isLoading && <Skeleton count={6} height={50} />}
      {data && (
        <TableWrapper role="table" aria-label={ariaLabel}>
          <TableHeader columns={columns} />
          <TableBody columns={columns} data={data} />
        </TableWrapper>
      )}
    </>
  );
}

Table.defaultProps = {
  data: null,
};

Table.propTypes = {
  /**
   * Defines the number and columns labels.
   */
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * Defines the aria label for the table.
   */
  ariaLabel: PropTypes.string.isRequired,
  /**
   * Defines the data for the table.
   */
  data: PropTypes.arrayOf(PropTypes.object),
  /**
   * Defines the loading style for the table.
   */
  isLoading: PropTypes.bool.isRequired,
};
