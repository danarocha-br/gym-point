import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { parseISO, differenceInYears } from 'date-fns';
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
  IconFrame,
  Data,
  Label,
  Logout,
} from './styles';

import Wrapper from '~/components/Wrapper';

export default function Profile() {
  const student = useSelector(state => state.enrollment.profile.student);
  const enrollment = useSelector(state => state.enrollment.profile);
  const plan = useSelector(state => state.enrollment.profile.plan.title);

  const parsedBirthday = parseISO(student.birthday);
  const started = parseISO(enrollment.start_date);
  const age = useMemo(() => differenceInYears(new Date(), parsedBirthday));

  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Wrapper color="light">
      <Header>
        <Title>Profile</Title>
        <Title>{plan} Plan</Title>

        <Avatar />
      </Header>

      <Container>
        <Name>{student.name}</Name>
        <Email>{student.email}</Email>

        <Stats>
          <DataGroup>
            <IconFrame>
              <Icon name="cake-variant" size={25} color="#fff" />
            </IconFrame>
            <Data>{age}</Data>
            <Label>age</Label>
          </DataGroup>

          <DataGroup>
            <IconFrame>
              <Icon name="scale-bathroom" size={25} color="#fff" />
            </IconFrame>
            <Data>{student.weight} kg</Data>
            <Label>Weight</Label>
          </DataGroup>

          <DataGroup>
            <IconFrame>
              <Icon name="ruler" size={25} color="#fff" />
            </IconFrame>
            <Data>{student.height} m</Data>
            <Label>height</Label>
          </DataGroup>
        </Stats>

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
