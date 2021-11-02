import { render, screen } from '@testing-library/react';
import App from './App';

test('renders banking app', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
