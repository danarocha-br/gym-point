import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  padding-bottom: 50px;
`;

export const ColLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 15px 70px 20px 0;
`;

export const ColRight = styled.div`
  display: flex;
  width: 100%;
  flex: 2;

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

    hr {
      opacity: 0.3;
      margin-top: 5px;
      margin-bottom: 20px;
    }
  }
`;
