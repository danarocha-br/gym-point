import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { parseISO, differenceInYears, format } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { TouchableOpacity } from 'react-native';
import { signOut } from '~/store/reducers/student/actions';

import { Container, Header, Title } from '~/styles/layout';
import {
  Avatar,
  Name,
  Email,
  Stats,
  DataGroup,
  Data,
  Label,
  Logout,
  Table,
  Row,
  RowTitle,
  RowData,
} from './styles';

import Wrapper from '~/components/Wrapper';
import logo from '~/assets/symbol.png';

export default function Profile() {
  const student = useSelector(state => state.enrollment.profile.student);
  const enrollment = useSelector(state => state.enrollment.profile);
  const plan = useSelector(state => state.enrollment.profile.plan.title);

  const parsedBirthday = parseISO(student.birthday);
  const started = format(parseISO(enrollment.start_date), 'MM/dd/yyyy');
  const end = format(parseISO(enrollment.end_date), 'MM/dd/yyyy');
  const age = useMemo(() => differenceInYears(new Date(), parsedBirthday));

  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Wrapper color="light">
      <Header>
        <Title>Profile</Title>
      </Header>

      <Container>
        <Avatar source={logo} resizeMode="center" />
        <Name>{student.name}</Name>
        <Email>{student.email}</Email>

        <Stats>
          <DataGroup>
            <Data>{age}</Data>
            <Label>age</Label>
          </DataGroup>

          <DataGroup>
            <Data>{student.weight} kg</Data>
            <Label>Weight</Label>
          </DataGroup>

          <DataGroup>
            <Data>{student.height} m</Data>
            <Label>height</Label>
          </DataGroup>
        </Stats>

        <Table>
          <Row>
            <RowTitle>Plan:</RowTitle>
            <RowData>{plan}</RowData>
          </Row>
          <Row>
            <RowTitle>Start:</RowTitle>
            <RowData>{started}</RowData>
          </Row>
          <Row>
            <RowTitle>End:</RowTitle>
            <RowData>{end}</RowData>
          </Row>
        </Table>

        <TouchableOpacity onPress={handleSignOut}>
          <Logout>Logout</Logout>
        </TouchableOpacity>
      </Container>
    </Wrapper>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="account-circle-outline" size={25} color={tintColor} />
  ),
};
