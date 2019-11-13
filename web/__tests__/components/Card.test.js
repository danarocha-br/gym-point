import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Card from '~/components/Card';

describe('Card component', () => {
  it('should be able to render children', () => {
    const { getByTestId } = render(<Card />);
  });
});
