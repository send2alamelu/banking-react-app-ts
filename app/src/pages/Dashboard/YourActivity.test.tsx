import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import YourActivity from './YourActivity';

describe('YourActivity Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders YourActivity with children', () => {
    const { getByTestId } = render(<YourActivity />);
  });
});
