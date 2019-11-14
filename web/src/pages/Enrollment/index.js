import React, { useEffect, useState } from 'react';

import api from '~/services/api';

import { PageWrapper, ColLeft, ColRight } from '~/styles/layout';
import { ButtonWrapper } from './styles';

import Card from '~/components/Card';
import Button from '~/components/Button';
import Table from '~/components/Table';

export default function Enrollment() {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    async function loadEnrollments() {
      const response = await api.get('enrollments');

      const data = response.data.map(enrollment => {
        const parsedBirthday = parseISO(enrollment.birthday);
        const parsedUpdated = parseISO(enrollment.updated_at);

        return {
          student: enrollment.student.name,
          email: enrollment.email,
          birthday: `${differenceInYears(
            new Date(),
            parsedBirthday
          )} years old`,
          updated_at: format(parsedUpdated, 'dd/MM/yyyy'),
        };
      });

      setEnrollments(data);
    }
    loadEnrollments();
  }, []);

  function handleAddPlan() {}

  const [columns] = useState([
    { path: 'student', label: 'Student' },
    { path: 'title', label: 'Plan' },
    { path: 'weight', label: 'Start Date' },
    { path: 'height', label: 'End Date' },
    { path: 'birthday', label: 'Active' },
    // {
    //   key: 'edit',
    //   content: plan => (
    //     <Button
    //       kind="icon"
    //       icon="trash"
    //       color="transparent"
    //       onClick={() => handleDelete(plan)}
    //     />
    //   ),
    // },
    // {
    //   key: 'delete',
    //   content: plan => (
    //     <Button
    //       kind="icon"
    //       icon="edit"
    //       color="transparent"
    //       onClick={() => handleEdit(plan)}
    //     />
    //   ),
    // },
  ]);

  return (
    <PageWrapper>
      <ColLeft>
        <h3>Managing Student Plans</h3>
      </ColLeft>

      <ColRight>
        <Card fullHeight>
          <ButtonWrapper>
            <Button kind="icon" icon="plus" onClick={handleAddPlan} />
          </ButtonWrapper>

          <Table columns={columns} data={plans} ariaLabel="plans" />
        </Card>
      </ColRight>
    </PageWrapper>
  );
}
