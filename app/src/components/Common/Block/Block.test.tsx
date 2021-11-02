import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Block from './Block';

describe('Block Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders Block with children', () => {
    const { getByTestId } = render(<Block>
      <h1 data-testid="title">Block Content</h1>
    </Block>);
    const title = getByTestId("title");
    expect(title.textContent).toBe('Block Content');
  });
});
