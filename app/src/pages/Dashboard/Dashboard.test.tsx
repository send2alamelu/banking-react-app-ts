import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

describe('Dashboard Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders Dashboard with children', () => {
    const { getByTestId } = render(<Dashboard />);
  });
});
