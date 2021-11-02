import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextInput from './TextInput';

describe('TextInput Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders TextInput with children', () => {
    onChange = { onChange }
    const { getByTestId } = render(<TextInput onChange={() => { }} />);
  });
});
