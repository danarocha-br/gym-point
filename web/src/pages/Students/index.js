import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import {
  loadStudentsRequest,
  deleteStudentRequest,
} from '~/store/reducers/students/actions';
import { showModal } from '~/store/reducers/modals/actions';

import { PageWrapper, ColLeft, ColRight } from '~/styles/layout';
import { Search } from './styles';

import Card from '~/components/Card';
import Button from '~/components/Button';
import Table from '~/components/Table';
import Error from '~/components/Error';

export default function Students() {
  const students = useSelector(state => state.students.list);
  const isLoading = useSelector(state => state.students.loading);
  const hasError = useSelector(state => state.students.showError);
  const modal = useSelector(state => state.modals.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadStudentsRequest());
  }, []); // eslint-disable-line

  const studentsTotal = useMemo(() => students && students.length, [students]);

  const [columns] = useState([
    { path: 'name', label: 'Name' },
    { path: 'email', label: 'Email' },
    { path: 'weight', label: 'Weight' },
    { path: 'height', label: 'Height' },
    { path: 'birthday', label: 'Age' },
    { path: 'updated_at', label: 'Last updated' },
    {
      key: 'delete',
      content: student => (
        <Button
          kind="icon"
          icon="trash"
          color="transparent"
          onClick={() => dispatch(deleteStudentRequest(student.id))}
        />
      ),
    },
    {
      key: 'edit',
      content: student => (
        <Button
          kind="icon"
          icon="edit"
          color="transparent"
          onClick={() => dispatch(showModal('ModalUpdateStudent', { student }))}
        />
      ),
    },
  ]);

  const pose = modal !== null ? 'withModal' : 'init';

  return (
    <PageWrapper pose={pose}>
      <ColLeft>
        <h3>Managing Students</h3>
        {studentsTotal}
      </ColLeft>

      <ColRight>
        <Card fullHeight>
          <Form>
            <Search>
              <Input name="search" placeholder="Search a student..." />
              <Button
                kind="icon"
                icon="plus"
                onClick={() => dispatch(showModal('ModalAddStudent'))}
              />
            </Search>
          </Form>

          {hasError ? (
            <Error data="students" status={hasError.response.status} />
          ) : (
            <Table
              isLoading={isLoading}
              columns={columns}
              data={students}
              ariaLabel="students"
            />
          )}
        </Card>
      </ColRight>
    </PageWrapper>
  );
}
