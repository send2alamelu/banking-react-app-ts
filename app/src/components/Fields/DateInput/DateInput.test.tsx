import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DateInput from './DateInput';

describe('DateInput Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders DateInput with children', () => {
    const label = 'Transfer Date';
    const { getByTestId } = render(<DateInput id="transferDate" label={label} onChange={() => { }} />);
  });
});
