import React, { useEffect, useState, useMemo } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { format, parseISO, differenceInYears } from 'date-fns';

import api from '~/services/api';
import history from '~/services/history';

import { PageWrapper, ColLeft, ColRight } from '~/styles/layout';
import { Search } from './styles';

import Card from '~/components/Card';
import Button from '~/components/Button';
import Table from '~/components/Table';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');

  async function loadStudents() {
    const response = await api.get('students');

    const data = response.data.map(student => {
      const parsedBirthday = parseISO(student.birthday);
      const parsedUpdated = parseISO(student.updated_at);

      return {
        ...student,
        weight: `${student.weight} kg`,
        height: `${student.height} m`,
        birthday: `${differenceInYears(new Date(), parsedBirthday)} years old`,
        updated_at: format(parsedUpdated, 'dd/MM/yyyy'),
      };
    });

    setStudents(data);
  }

  useEffect(() => {
    loadStudents();
  }, []);

  const studentsTotal = useMemo(() => students.length, [students]);

  async function handleDelete(student) {
    if (
      window.confirm(`Are you sure you want to delete ${student.name}?`) ===
      true
    ) {
      await api.delete(`students/${student.id}`);

      setStudents(students.filter(s => s.id !== student.id));
      loadStudents();
    }
  }

  async function handleAddStudent(student) {
    // const data = await api.put(student.id, student);
    // console.tron.log(data);
  }

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
          onClick={() => history.push(`/students/${student.id}`)}
        />
      ),
    },
  ]);

  return (
    <PageWrapper>
      <ColLeft>
        <h3>Managing Students</h3>
        {studentsTotal}
      </ColLeft>

      <ColRight>
        <Card fullHeight>
          <Form>
            <Search>
              <Input name="search" placeholder="Search a student..." />
              <Button kind="icon" icon="plus" onClick={handleAddStudent} />
            </Search>
          </Form>

          <Table columns={columns} data={students} ariaLabel="students" />
        </Card>
      </ColRight>
    </PageWrapper>
  );
}
