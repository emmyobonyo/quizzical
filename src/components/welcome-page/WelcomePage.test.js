import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import WelcomePage from './WelcomePage';

test('renders correct welcome page', () => {
  render(<WelcomePage />);
  const title = screen.getByText(/Quizzical/);
  expect(title).toBeInTheDocument();
});
