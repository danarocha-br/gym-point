import styled from 'styled-components/native';

import colors from '~/styles/colors';

export const Title = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  opacity: 0.7;
  margin: 10px auto 30px;
`;

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: ${colors.blue};
  position: relative;
  top: 140px;
`;

export const Stats = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 35px;
  margin-bottom: auto;
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
