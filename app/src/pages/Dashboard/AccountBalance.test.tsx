import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AccountBalance from './AccountBalance';
import * as getApiHook from '../../hooks/useGet';

describe('AccountBalance Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders AccountBalance with children', () => {
    // Arrange.
    jest.spyOn(getApiHook, 'useGet').mockImplementation(() => ({
      response: { status: 'success', balance: 100000 }
    }));
    const { getByText } = render(<AccountBalance />);

    // Assert.
    expect(getByText(/You have/i)).toBeDefined();
    expect(getByText('$100,000.00')).toBeDefined();
    expect(getByText(/in your account/i)).toBeDefined();
  });
});
