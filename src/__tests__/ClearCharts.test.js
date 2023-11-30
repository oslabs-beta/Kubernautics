import * as React from 'react';
import { render, screen } from '@testing-library/react';

import ClearChart from '../components/ClearCharts';

describe ('ClearChart', () => {
  test('Button should be labelled correctly', () => {
    render(<ClearChart />);
    expect(screen.getByText("Reset to Defaults")).toBeInTheDocument();
  });
});
