import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DateInput from './DateInput';

describe('DateInput Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders DateInput with children', () => {
    const { getByTestId } = render(<DateInput onChange={() => { }} />);
  });
});
