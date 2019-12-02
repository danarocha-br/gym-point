import React from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { PageWrapper, ColLeft, ColRight } from '~/styles/layout';
import Card from '~/components/Card';
import Button from '~/components/Button';
import Form from '~/components/Form';
import TextInput from '~/components/Form/TextInput';
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
            <TextInput name="name" title="Your name" />
            <TextInput name="email" type="email" title="Your email" />

            <hr />
            <TextInput
              name="oldPassword"
              type="password"
              title="Your password"
            />
            <TextInput
              name="newPassword"
              type="password"
              title="New password"
            />
            <TextInput
              name="confirmPassword"
              type="password"
              title="Confirm your password"
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
