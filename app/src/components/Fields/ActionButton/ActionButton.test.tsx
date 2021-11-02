import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ActionButton from './ActionButton';

describe('ActionButton Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders ActionButton with children', () => {
    const { getByTestId } = render(<ActionButton onClick={() => { }} />);
  });
});
