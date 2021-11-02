import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextInput from './TextInput';

describe('TextInput Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders TextInput with children', () => {
    // Arrange.
    const label = 'Username';

    // Act.
    const { container } = render(<TextInput id="username" label={label} onChange={jest.fn} />);

    // Assert.
    expect(container.getElementsByClassName('MuiBox-root').length).toBe(1);
    expect(container.getElementsByClassName('MuiFormControl-root').length).toBe(2);
    expect(container.getElementsByClassName('MuiTextField-root').length).toBe(1);
    expect(container.getElementsByClassName('MuiInputLabel-root')[0].textContent).toEqual(label);
  });
});
