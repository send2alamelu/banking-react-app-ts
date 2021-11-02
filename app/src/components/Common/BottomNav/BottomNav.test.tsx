import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BottomNav from './BottomNav';

describe('BottomNav', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders BottomNav with children', () => {
    const { getByTestId } = render(<ActionButton onChange={() => { }} />);
  });
});