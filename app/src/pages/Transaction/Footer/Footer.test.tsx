import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

describe('Footer Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders Footer with children', () => {
    const { asFragment } = render(<Footer onSubmit={jest.fn} />);
    expect(asFragment()).toMatchSnapshot();
  });
});