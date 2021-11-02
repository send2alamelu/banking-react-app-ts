import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Block from './Block';

describe('Block Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders Block with children', () => {
    // Arrange.
    const { getByTestId } = render(<Block>
      <h1 data-testid="block-children">Block Content</h1>
    </Block>);

    // Act.
    const blockChildren = getByTestId("block-children");

    // Assert.
    expect(blockChildren.textContent).toBe('Block Content');
  });
});
