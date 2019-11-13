import styled from 'styled-components';

import { size } from '~/styles/typography';

export const TableWrapper = styled.table`
  width: 100%;
  border-spacing: 0px;

  th {
    color: var(--color-grey-md);
    font-size: ${size.type12};
    text-align: left;
    text-transform: uppercase;
  }

  tr {
    height: 55px;
    background-color: white;
    border-bottom: 1px solid black;

    &:hover {
      background-color: var(--color-grey-lightest);
    }
  }

  td {
    &:first-child {
      font-weight: 500;
    }

    &:nth-last-child(-n + 2) {
      text-align: right;
      float: right;
    }
  }
`;
