import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import NavBar from '../components/NavBar';

describe ('NavBar', () => {
  test('Renders correctly', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(screen.getByText("Kubernautics")).toBeInTheDocument();
  });
});
