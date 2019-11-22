import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosCheckmarkCircle } from 'react-icons/io';

import {
  loadEnrollmentsRequest,
  deleteEnrollmentRequest,
} from '~/store/reducers/enrollments/actions';
import { showModal } from '~/store/reducers/modals/actions';

import { PageWrapper, ColLeft, ColRight, ButtonWrapper } from '~/styles/layout';

import Card from '~/components/Card';
import Button from '~/components/Button';
import Table from '~/components/Table';
import Error from '~/components/Error';
import Stats from '~/components/Stats';

export default function Enrollments() {
  const enrollments = useSelector(state => state.enrollments.list);
  const isLoading = useSelector(state => state.enrollments.loading);
  const hasError = useSelector(state => state.enrollments.showError);
  const modal = useSelector(state => state.modals.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadEnrollmentsRequest());
  }, []); // eslint-disable-line

  const enrollmentsTotal = useMemo(() => enrollments && enrollments.length, [
    enrollments,
  ]);

  const [columns] = useState([
    { path: 'student', label: 'Student' },
    { path: 'plan', label: 'Plan' },
    { path: 'start_date', label: 'Start Date' },
    { path: 'end_date', label: 'End Date' },
    {
      label: 'Active',
      key: 'delete',
      content: enrollment =>
        enrollment.active ? (
          <IoIosCheckmarkCircle color="mediumseagreen" size="22px" />
        ) : (
          <IoIosCheckmarkCircle color="lightgrey" size="22px" />
        ),
    },
    {
      key: 'actions',
      content: enrollment => (
        <>
          <Button
            kind="icon"
            icon="trash"
            color="transparent"
            onClick={() => dispatch(deleteEnrollmentRequest(enrollment.id))}
          />
          <Button
            kind="icon"
            icon="edit"
            color="transparent"
            onClick={() =>
              dispatch(showModal('ModalUpdateEnrollment', { enrollment }))
            }
          />
        </>
      ),
    },
  ]);

  const pose = modal !== null ? 'withModal' : 'init';

  return (
    <PageWrapper pose={pose}>
      <ColLeft>
        <h3>Managing Enrollments</h3>
        <p style={{ marginBottom: '30px' }}>
          Check out some data from current enrollments.
        </p>

        <Stats
          label="Current Enrollments"
          data={enrollmentsTotal <= 0 || null ? '0' : `${enrollmentsTotal}`}
        />
      </ColLeft>

      <ColRight>
        <Card fullHeight>
          <ButtonWrapper>
            <h4>Your current enrollments:</h4>

            <Button
              kind="icon"
              icon="plus"
              onClick={() => dispatch(showModal('ModalAddEnrollment'))}
            />
          </ButtonWrapper>

          {hasError ? (
            <Error data="enrollments" status={hasError.response.status} />
          ) : (
            <Table
              isLoading={isLoading}
              columns={columns}
              data={enrollments}
              ariaLabel="enrollments"
            />
          )}
        </Card>
      </ColRight>
    </PageWrapper>
  );
}
