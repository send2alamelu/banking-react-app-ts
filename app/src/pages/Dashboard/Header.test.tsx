import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => {
      return {
        push: jest.fn,
      }
    }
  }
})

describe('Header Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders Header with children', () => {
    // Arrange
    const { getByText } = render(<Header />);
    const logoutLink = getByText(/Logout/i);
  
    // Act.
    fireEvent.click(logoutLink)

    // Assert
    expect(logoutLink).toBeDefined(); 
  });
});
