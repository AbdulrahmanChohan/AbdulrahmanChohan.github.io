import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  class MockIntersectionObserver {
    observe() { }
    unobserve() { }
    disconnect() { }
  }

  window.IntersectionObserver = MockIntersectionObserver;
});

test('renders AI and full-stack hero headline', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /ai & full-stack engineer/i });
  expect(heading).toBeInTheDocument();
});
