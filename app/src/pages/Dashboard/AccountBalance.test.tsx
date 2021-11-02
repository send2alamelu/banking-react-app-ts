import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AccountBalance from './AccountBalance';

describe('AccountBalance Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders AccountBalance with children', () => {
    const { getByTestId } = render(<AccountBalance />);
  });
});
