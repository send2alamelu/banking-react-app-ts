import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';

describe('Login Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders Login with children', () => {
    const { getByTestId } = render(<Login onClick={() => { }} />);
  });
});