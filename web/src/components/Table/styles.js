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
    width: 100%;
    border: 1px solid black;
    transition: background-color, 0.5s, ease-in;

    &:hover {
      background-color: var(--color-grey-lightest);
    }

    &:active,
    &:focus-within {
      background: #536cfa20;
    }
  }

  thead tr:hover {
    background-color: white;
  }

  td {
    border-bottom: 1px dashed var(--color-grey-light);

    &:first-child {
      font-weight: 500;
    }

    &:nth-last-child(-n + 1) {
      text-align: right;

      button {
        float: right;
      }
    }
  }
`;
