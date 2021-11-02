import { render, fireEvent, cleanup, getByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ActionButton from './ActionButton';

describe('ActionButton Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders ActionButton with children', () => {
    // Arrange.
    let clicks = 0;
    const buttonLabel = 'Login';
    const { container, getByText } = render(<ActionButton label={buttonLabel} onClick={() => {
      clicks++;
    }} />);

    // Act.
    const button = container.getElementsByClassName('MuiButton-root');
    fireEvent.click(button[0]);

    // Assert.
    expect(container.getElementsByClassName('MuiBox-root').length).toBe(1);
    expect(button.length).toBe(1);
    expect(getByText(buttonLabel)).toBeInTheDocument();
    expect(clicks).toEqual(1);
  });
});
