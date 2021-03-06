import React from 'react';
import { render, screen } from '@testing-library/react';
import DefaultRoute from '../lib/DefaultRoute';

describe('DefaultRoute.test.js', () => {
  test('A simple test', () => {
    render(
      <DefaultRoute />,
    );
    expect(screen.queryByText(/Hello worlds!!/i)).not.toBeNull();
  });
});
