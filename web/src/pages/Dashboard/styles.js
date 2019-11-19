import styled from 'styled-components';

export const SummaryCard = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => {
    if (props.student) return 'var(--color-primary)';
    if (props.enrollment) return 'var(--color-blue)';
    return 'lightseagreen';
  }};
  border-radius: 20px;
  height: 120px;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }

  p {
    text-align: center;
    margin-top: 8px;
    font-weight: 500;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 350px;
  grid-gap: 1rem;
`;

export const SecondaryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 120px;
  grid-gap: 1rem;
  background-color: #ebeef1;
  border-radius: 20px;
  margin-top: 20px;
`;

export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.bordered ? '' : '#ebeef1')};
  border: ${props => (props.bordered ? '2px solid var(--color-blue)' : '')};
  padding: 20px;
  border-radius: 20px;
  overflow: hidden;

  img {
    width: 80%;
    position: relative;
    right: -100px;
    bottom: -30px;
  }

  ul {
    margin-top: 15px;

    li {
      width: 100%;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px dashed var(--color-grey-md);
      padding: 5px 0;
    }
  }
`;

export const IconFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff40;
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;
