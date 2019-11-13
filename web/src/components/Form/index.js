import React from 'react';
import Proptypes from 'prop-types';
import { Form } from '@rocketseat/unform';

export default function FormWrapper({
  children,
  schema,
  onSubmit,
  initialData,
}) {
  return (
    <Form
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      schema={schema}
      onSubmit={onSubmit}
      initialData={initialData}
    >
      {children}
    </Form>
  );
}

FormWrapper.propTypes = {
  /**
   * Defines the validation schema for the form.
   */
  schema: Proptypes.func.isRequired,
  /**
   * Defines the action for form submit.
   */
  onSubmit: Proptypes.func.isRequired,
  /**
   * Defines the children for the component.
   */
  children: Proptypes.element.isRequired,
  /**
   * If need an initial data.
   */
  initialData: Proptypes.object,
};
