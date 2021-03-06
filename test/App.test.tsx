import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from '../src/plugin/App';

jest.mock('../src/plugin/DefaultRoute', () => ({
  __esModule: true,
  default: jest.fn(() => (<div>Default Route</div>)),
}));

describe('App.test.js', () => {
  test('A simple test', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>,
    );
    expect(screen.queryByText(/Default Route/i)).not.toBeNull();
  });
});
