import styled from 'styled-components';
import { fluidRange } from 'polished';

export const Wrapper = styled.div`
  ${fluidRange(
    {
      prop: 'padding',
      fromSize: '3.5rem',
      toSize: '8rem',
    },
    '320px',
    '991px'
  )}
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 991px) {
    flex-direction: row;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  flex: 1;
  width: 100%;

  h1,
  ~ div {
    ${fluidRange(
      {
        prop: 'margin-top',
        fromSize: '40px',
        toSize: '80px',
      },
      '320px',
      '991px'
    )}
  }

  h1 {
    color: #fff;
    font-weight: 600;
  }

  h2 {
    color: #fff;
    margin-top: 15px;
    opacity: 0.5;
  }

  form {
    input {
      margin-bottom: 15px;
    }

    button {
      margin-top: 35px;
    }

    span {
      color: var(--color-primary);
      align-self: flex-start;
      margin: 0 0 10px;
    }
  }
`;
