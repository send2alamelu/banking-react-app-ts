import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RecepientDropDown from './RecepientDropDown';

describe('RecepientDropDown Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders RecepientDropDown with children', () => {
    const { getByTestId } = render(<RecepientDropDown onChange={() => { }} />);
  });
});