import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import NavBar from '../components/NavBar';

describe ('NavBar', () => {
  test('Renders correctly', () => {
    render(
      // MemoryRouter is used here to stand in for the actual (React-)Router component
      // used in the app. Some documentation on how to test with/around React Router
      // can be found here --
      // https://testing-library.com/docs/example-react-router/ (we use react-router v6)
      //
      // These were also helpful to a point, but do note the URL suggests they're for
      // react-router v5. --
      // https://v5.reactrouter.com/web/guides/testing
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(screen.getByText("Kubernautics")).toBeInTheDocument();
  });
});
