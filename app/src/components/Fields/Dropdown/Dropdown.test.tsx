import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders Dropdown with children', () => {
    const { getByTestId } = render(<Dropdown onChange={() => { }} />);
  });
});
