import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Transaction from './Transaction';

describe('Transaction Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders Transaction with children', () => {
    const { asFragment } = render(<Transaction />);
    expect(asFragment()).toMatchSnapshot();
  });
});