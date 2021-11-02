import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

describe('Footer Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders Footer with children', () => {
    const { getByTestId } = render(<Footer />);
  });
});
