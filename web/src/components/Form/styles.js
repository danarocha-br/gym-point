import styled from 'styled-components';
import { Input } from '@rocketseat/unform';

import { size } from '~/styles/typography';

export const Container = styled.div`
  position: relative;
  margin-bottom: 10px;

  label::before {
    content: attr(data-title);
    color: var(--color-grey-md);
    font-size: ${size.type14};
    position: absolute;
    top: 0;
    left: 15px;
    line-height: 47px;
    transition: 300ms all;
  }

  input {
    color: var(--color-grey-dark);
    font-size: ${size.type14};
    width: 100%;
    line-height: 40px;
    padding: 0 15px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 7px;

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
    font-size: ${size.type12};
    top: -10px;
    background: #fff;
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
