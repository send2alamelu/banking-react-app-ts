import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

describe('Header Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders Header with children', () => {
    const { getByTestId } = render(<Header />);
  });
});
