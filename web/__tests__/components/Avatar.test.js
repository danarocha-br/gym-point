import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Avatar from '~/components/Avatar';

describe('Button component', () => {
  it('should open menu when avatar is clicked', () => {
    const { getByTestId } = render(<Avatar />);
  });
});
