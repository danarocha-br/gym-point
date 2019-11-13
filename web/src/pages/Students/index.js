import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Input } from '@rocketseat/unform';
import { format, parseISO, differenceInYears } from 'date-fns';

import api from '~/services/api';

import { PageWrapper, ColLeft, ColRight } from '~/styles/layout';
import { Search } from './styles';

import Card from '~/components/Card';
import Button from '~/components/Button';
import Table from '~/components/Table';

const baseUrl = 'http://localhost:3333';

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');

      // const search = await api.get('students', {
      //   params: { name },
      // });

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

  async function handleDelete(student) {
    // await api.delete('students', {
    //   id: student.id,
    // });
    const response = await axios.delete(`${baseUrl}/${student.id}`);
    console.tron.log(response.data);

    const data = students.filter(stud => stud.id !== student.id);
    setStudents(data);
  }

  async function handleEdit(student) {
    // const data = await api.put(student.id, student);
    // console.tron.log(data);
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
              <Button kind="icon" icon="plus" onClick={handleAddStudent} />
            </Search>
          </Form>

          <Table columns={columns} data={students} ariaLabel="students" />
        </Card>
      </ColRight>
    </PageWrapper>
  );
}
