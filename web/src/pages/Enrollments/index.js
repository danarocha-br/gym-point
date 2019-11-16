import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import { IoIosCheckmarkCircle } from 'react-icons/io';

import {
  loadEnrollmentsRequest,
  deleteEnrollmentRequest,
  updateEnrollmentRequest,
} from '~/store/reducers/enrollments/actions';
import { showModal } from '~/store/reducers/modals/actions';

import { PageWrapper, ColLeft, ColRight } from '~/styles/layout';
import { ButtonWrapper } from './styles';

import Card from '~/components/Card';
import Button from '~/components/Button';
import Table from '~/components/Table';
import Error from '~/components/Error';

export default function Enrollments() {
  const enrollments = useSelector(state => state.enrollments.list);
  const isLoading = useSelector(state => state.enrollments.loading);
  const hasError = useSelector(state => state.enrollments.showError);
  const modal = useSelector(state => state.modals.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadEnrollmentsRequest());
  }, []); // eslint-disable-line

  // function formattedEnrollments() {
  //   enrollments.map(enrollment => {
  //     const parsedStartDate = parseISO(enrollment.start_date);
  //     const parsedEndDate = parseISO(enrollment.end_date);

  //     return {
  //       ...enrollment,
  //       student: enrollment.student.name,
  //       plan: enrollment.plan.title,
  //       start_date: format(parsedStartDate, 'dd/MM/yyyy'),
  //       end_date: format(parsedEndDate, 'dd/MM/yyyy'),
  //     };
  //   });
  // }

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
      key: 'delete',
      content: enrollment => (
        <Button
          kind="icon"
          icon="trash"
          color="transparent"
          onClick={() => dispatch(deleteEnrollmentRequest(enrollment.id))}
        />
      ),
    },
    {
      key: 'edit',
      content: enrollment => (
        <Button
          kind="icon"
          icon="edit"
          color="transparent"
          onClick={() =>
            dispatch(showModal('ModalUpdateEnrollment', { enrollment }))
          }
        />
      ),
    },
  ]);

  const pose = modal !== null ? 'withModal' : 'init';

  return (
    <PageWrapper pose={pose}>
      <ColLeft>
        <h3>Managing Enrollments</h3>
      </ColLeft>

      <ColRight>
        <Card fullHeight>
          <ButtonWrapper>
            <h4>
              {enrollmentsTotal <= 0 || null
                ? 'No enrollments found.'
                : `Total of ${enrollmentsTotal} enrollments.`}
            </h4>

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
