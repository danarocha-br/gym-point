import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { hideModal } from '~/store/reducers/modals/actions';
import { makeCheckinRequest } from '~/store/reducers/checkins/actions';

import { Container, CloseBtn } from './styles';
import Button from '~/components/Button';

function AddNewCheckin() {
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.orders.loading);
  const student = useSelector(state => state.enrollment.profile.student);
  const studentId = student.id;

  function handleCheckin() {
    dispatch(makeCheckinRequest(studentId));
  }

  function handleCloseModal() {
    dispatch(hideModal());
  }

  return (
    <Container>
      <CloseBtn onPress={handleCloseModal}>
        <Icon name="close" size={26} color="#fff" />
      </CloseBtn>

      <Button fullWidth onPress={handleCheckin} isLoading={isLoading}>
        Confirm Checkin
      </Button>
    </Container>
  );
}

export default AddNewCheckin;
