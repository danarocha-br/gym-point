import styled from 'styled-components';
import { Input } from '@rocketseat/unform';

import { size } from '~/styles/typography';

export const Container = styled.div`
  position: relative;

  label::before {
    content: attr(data-title);
    color: var(--color-grey-md);
    font-size: ${size.type16};
    font-weight: 500;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 15px;
    line-height: 50px;
    transition: 300ms all;
  }

  input {
    color: var(--color-grey-dark);
    font-size: ${size.type14};
    line-height: 40px;

    &:focus {
      outline: 0;
      border-color: var(--color-blue);
    }
  }

  input:valid + label::before {
    content: attr(data-title);
  }

  input:focus + label::before,
  input:valid + label::before {
    line-height: 20px;
    font-size: 11px;
    top: 4px;
    padding: 0 6px;
    left: 9px;
  }

  span {
    color: var(--color-red);
    font-size: ${size.type12};
    position: relative;
    top: -10px;
  }
`;

export const TextInput = styled(Input)``;
