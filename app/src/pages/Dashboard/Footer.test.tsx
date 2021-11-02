import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => {
      return {
        push: jest.fn,
      }
    }
  }
})

describe('Footer Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders Footer with children', () => {
    // Arrange.
    const { getByText } = render(<Footer />);
    const navAction = getByText(/Make a transfer/i)

    // Act.
    fireEvent.click(navAction)
  });
});
