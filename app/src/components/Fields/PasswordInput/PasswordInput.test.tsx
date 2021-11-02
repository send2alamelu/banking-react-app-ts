import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PasswordInput from './PasswordInput';

describe('PasswordInput Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders PasswordInput with children', () => {
    const { getByTestId } = render(<PasswordInput onChange={() => { }} />);
  });
});
