import * as React from 'react';
import { render } from '@testing-library/react';

import { CustomChart } from '../components/CustomChart';

describe ('CustomChart', () => {
  test('Should provide a "Reset" button', () => {
    const { getByRole } = render(<CustomChart />);
    expect(getByRole('button', { name: 'Reset to Defaults'})).toBeInTheDocument();
  });
  test('Should provide an "Add Metric" button', () => {
    const { getByRole } = render(<CustomChart />);
    expect(getByRole('button', { name: 'Add Metric'})).toBeInTheDocument();
  });
});
