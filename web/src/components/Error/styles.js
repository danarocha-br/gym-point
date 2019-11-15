import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  p {
    background-color: var(--color-grey-lightest);
    padding: 30px;
    border-radius: 10px;
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: flex-end;
`;
