import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BottomNav from './BottomNav';

describe('BottomNav', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders BottomNav with Box and BottomNavigation with children', () => {
    // Arrange.
    const { container, getByTestId } = render(<BottomNav>
      <a href="#" data-testid="nav-link">Make a Transfer</a>
    </BottomNav>);

    // Act.
    const navItems = getByTestId("nav-link");

    // Assert.
    expect(container.getElementsByClassName('MuiBox-root').length).toBe(1);
    expect(container.getElementsByClassName('MuiBottomNavigation-root').length).toBe(1);
    expect(navItems.textContent).toBe('Make a Transfer');
  });
});