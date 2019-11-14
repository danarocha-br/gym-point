import React, { useEffect, useState } from 'react';
import { format, parseISO, isAfter } from 'date-fns';
import { IoIosCheckmarkCircle } from 'react-icons/io';

import api from '~/services/api';

import { PageWrapper, ColLeft, ColRight } from '~/styles/layout';
import { ButtonWrapper } from './styles';

import Card from '~/components/Card';
import Button from '~/components/Button';
import Table from '~/components/Table';

export default function Enrollments() {
  const [enrollments, setEnrollments] = useState([]);

  async function loadEnrollments() {
    const response = await api.get('enrollments');

    const data = response.data.map(enrollment => {
      const parsedStartDate = parseISO(enrollment.start_date);
      const parsedEndDate = parseISO(enrollment.end_date);

      return {
        ...enrollment,
        student: enrollment.student.name,
        plan: enrollment.plan.title,
        start_date: format(parsedStartDate, 'dd/MM/yyyy'),
        end_date: format(parsedEndDate, 'dd/MM/yyyy'),
      };
    });

    setEnrollments(data);
  }

  useEffect(() => {
    loadEnrollments();
  }, []);

  function handleAddPlan() {}

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
      key: 'edit',
      content: enrollment => (
        <Button
          kind="icon"
          icon="trash"
          color="transparent"
          onClick={() => 'clicked'}
        />
      ),
    },
    {
      key: 'delete',
      content: enrollment => (
        <Button
          kind="icon"
          icon="edit"
          color="transparent"
          onClick={() => 'clicked'}
        />
      ),
    },
  ]);

  return (
    <PageWrapper>
      <ColLeft>
        <h3>Managing Enrollments</h3>
      </ColLeft>

      <ColRight>
        <Card fullHeight>
          <ButtonWrapper>
            <Button kind="icon" icon="plus" onClick={handleAddPlan} />
          </ButtonWrapper>

          <Table columns={columns} data={enrollments} ariaLabel="plans" />
        </Card>
      </ColRight>
    </PageWrapper>
  );
}
