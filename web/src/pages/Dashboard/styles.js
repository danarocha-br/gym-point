import styled from 'styled-components';

export const SummaryCard = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.student ? 'var(--color-primary)' : 'var(--color-blue)'};
  border-radius: 20px;
  height: 100px;
  margin-bottom: 15px;
  margin-right: 15px;

  p {
    text-align: center;
    margin-bottom: 12px;
  }
`;

export const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${props => (props.small ? 1 : 3)};
`;

export const Container = styled.div`
  display: flex;
`;
