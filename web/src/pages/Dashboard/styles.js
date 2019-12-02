import styled from 'styled-components';
import { fluidRange } from 'polished';

export const SummaryCard = styled.div`
  color: white;
  display: flex;
  flex: 1;
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
  padding: 10px;
  ${fluidRange(
    {
      prop: 'font-size',
      fromSize: '12px',
      toSize: '16px',
    },
    '320px',
    '991px'
  )}
  ${fluidRange(
    {
      prop: 'margin-bottom',
      fromSize: '0px',
      toSize: '15px',
    },
    '320px',
    '991px'
  )}
  ${fluidRange(
    {
      prop: 'margin-right',
      fromSize: '15px',
      toSize: '0px',
    },
    '320px',
    '991px'
  )}

  &:last-child {
    margin-bottom: 0;
    margin-right: 0;
  }

  p {
    text-align: center;
    margin-top: 8px;
    font-weight: 500;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-gap: 1rem;

  @media (min-width: 991px) {
    grid-template-columns: 1fr 2fr 1fr;
    height: calc(100% - 60px);
  }
`;

export const SummaryWrapper = styled.div`
  display: flex;

  @media (min-width: 991px) {
    flex-direction: column;
  }
`;

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.bordered ? 'initial' : 'space-between')};
  align-items: ${props => (props.bordered ? 'center' : '')};
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
