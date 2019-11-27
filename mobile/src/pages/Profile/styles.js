import styled from 'styled-components/native';

import colors from '~/styles/colors';

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: ${colors.primary};
`;

export const Stats = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 35px;
`;

export const DataGroup = styled.View`
  align-items: center;
`;
export const IconFrame = styled.View`
  background-color: #b1c4e5;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Label = styled.Text`
  color: ${colors.greyMd};
  font-size: 13px;
  font-weight: 600;
  text-transform: capitalize;
  margin-top: 10px;
`;
export const Name = styled.Text`
  color: ${colors.primary};
  font-size: 24px;
  font-weight: 600;
  margin-top: 15px;
`;

export const Email = styled.Text`
  font-size: 15px;
  color: ${colors.greyMd};
  margin-top: 10px;
`;

export const Data = styled.Text`
  color: ${colors.purple};
  font-size: 24px;
  font-weight: 600;
  margin-top: 10px;
`;

export const Logout = styled.Text`
  color: ${colors.primary};
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  padding-bottom: 30px;
`;

export const Table = styled.View`
  margin-top: 40px;
  margin-bottom: 60px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  border-bottom-width: 1;
  border-bottom-color: ${colors.greyLight};
  padding: 10px 0;
`;

export const RowTitle = styled.Text`
  color: ${colors.greyMd};
  font-size: 15px;
  margin-right: auto;
`;

export const RowData = styled.Text`
  color: ${colors.greyDark};
  font-size: 16px;
  font-weight: 600;
  text-align: right;
`;
