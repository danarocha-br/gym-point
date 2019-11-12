import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from '~/components/Button';

describe('Button component', () => {
  it('should call mock function when button is clicked', () => {
    const { getByTestId } = render(<Button />);
  });
});
