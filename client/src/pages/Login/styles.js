import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 8rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  flex: 1;

  h1,
  ~ div {
    margin-top: 80px;
  }

  h1 {
    color: var(--color-grey-dark);
    font-weight: 600;
  }

  h2 {
    color: var(--color-grey-md);
    margin-top: 15px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    input,
    a {
      margin-bottom: 15px;
    }

    span {
      color: var(--color-primary);
      align-self: flex-start;
      margin: 0 0 10px;
    }
  }
`;
