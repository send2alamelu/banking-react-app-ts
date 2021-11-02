import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';

describe('Login Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders Login with children', () => {
    // Arrange.
    const { getByLabelText, getByText } = render(<Login />);
    const username = getByLabelText('Username');
    const password = getByLabelText('Password');
    username.value = 'ocbc';
    password.value = '123456';

    // Act.
    fireEvent.click(getByText('Login'));
  });
});