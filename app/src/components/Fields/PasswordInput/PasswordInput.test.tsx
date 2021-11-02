import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PasswordInput from './PasswordInput';

describe('PasswordInput Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders PasswordInput with children', () => {
    // Arrange.
    const label = 'Password';

    // Act.
    const { container } = render(<PasswordInput id="password" label={label} onChange={jest.fn} />);

    // Assert.
    expect(container.getElementsByClassName('MuiBox-root').length).toBe(1);
    expect(container.getElementsByClassName('MuiFormControl-root').length).toBe(2);
    expect(container.getElementsByClassName('MuiTextField-root').length).toBe(1);
    expect(container.getElementsByClassName('MuiInputLabel-root')[0].textContent).toEqual(label);
  });
});
