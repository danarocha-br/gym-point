import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { format, parseISO, differenceInYears } from 'date-fns';
import { IoIosAdd } from 'react-icons/io';

import api from '~/services/api';

import { PageWrapper, ColLeft, ColRight } from '~/styles/layout';
import { Search } from './styles';

import Card from '~/components/Card';
import Button from '~/components/Button';
import Table from '~/components/Table';

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');

      const data = response.data.map(student => {
        const parsedBirthday = parseISO(student.birthday);
        const parsedUpdated = parseISO(student.updated_at);

        return {
          name: student.name,
          email: student.email,
          weight: `${student.weight} kg`,
          height: `${student.height} m`,
          birthday: `${differenceInYears(
            new Date(),
            parsedBirthday
          )} years old`,
          updated_at: format(parsedUpdated, 'dd/MM/yyyy'),
        };
      });

      setStudents(data);
    }
    loadStudents();
  }, []);

  function handleDelete(student) {}

  function handleEdit(student) {}

  const [columns] = useState([
    { path: 'name', label: 'Name' },
    { path: 'email', label: 'Email' },
    { path: 'weight', label: 'Weight' },
    { path: 'height', label: 'Height' },
    { path: 'birthday', label: 'Age' },
    { path: 'updated_at', label: 'Last updated' },
    {
      key: 'edit',
      content: student => (
        <Button
          kind="icon"
          icon="trash"
          color="transparent"
          onClick={() => handleDelete(student)}
        />
      ),
    },
    {
      key: 'delete',
      content: student => (
        <Button
          kind="icon"
          icon="edit"
          color="transparent"
          onClick={() => handleEdit(student)}
        />
      ),
    },
  ]);

  return (
    <PageWrapper>
      <ColLeft>
        <h3>Managing Students</h3>
        {students.length}
      </ColLeft>

      <ColRight>
        <Card fullHeight>
          <Form>
            <Search>
              <Input name="search" placeholder="Search a student..." />
              <Button kind="icon" icon="plus" onSubmit />
            </Search>
          </Form>

          <Table columns={columns} data={students} ariaLabel="students" />
        </Card>
      </ColRight>
    </PageWrapper>
  );
}
