import React from 'react';
import { Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { PageWrapper, ColLeft, ColRight } from '~/styles/layout';
import Card from '~/components/Card';
import Button from '~/components/Button';
import Form from '~/components/Form';
import Avatar from '~/components/Avatar';
import { updateProfileRequest } from '~/store/reducers/user/actions';

const schema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email(),
  oldPassword: Yup.string().min(6),
  password: Yup.string()
    .min(6)
    .when('oldPassword', (oldPassword, field) =>
      oldPassword ? field.required() : field
    ),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password ? field.required().oneOf([Yup.ref('password')]) : field
  ),
});

export default function Profile() {
  const loading = useSelector(state => state.auth.loading);
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <PageWrapper>
      <ColLeft>
        <h3>Profile</h3>
      </ColLeft>

      <ColRight>
        <Card fullHeight>
          <Form schema={schema} initialData={profile} onSubmit={handleSubmit}>
            <Avatar name="avatar_id" />
            <Input name="name" placeholder="Your name" />
            <Input name="email" type="email" placeholder="Your email" />

            <hr />
            <Input
              name="oldPassword"
              type="password"
              placeholder="Your password"
            />
            <Input
              name="newPassword"
              type="password"
              placeholder="New password"
            />
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
            />

            <Button
              label={loading ? 'Loading...' : 'Update your Data'}
              onSubmit
            />
          </Form>
        </Card>
      </ColRight>
    </PageWrapper>
  );
}
