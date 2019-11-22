import React from 'react';
import PropTypes from 'prop-types';
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

FormWrapper.defaultProps = {
  initialData: '',
};

FormWrapper.propTypes = {
  /**
   * Defines the validation schema for the form.
   */
  schema: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  /**
   * Defines the action for form submit.
   */
  onSubmit: PropTypes.func.isRequired,
  /**
   * Defines the children for the component.
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
  /**
   * If need an initial data.
   */
  initialData: PropTypes.objectOf(PropTypes.any),
};
