import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('shows the featured movie collection on the home page', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { name: 'Stories worth staying in for.' })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: 'View Inception details' })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: 'View Interstellar details' })
  ).toBeInTheDocument();
});

test('opens a movie description and trailer, then navigates back home', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: 'View Inception details' }));

  expect(screen.getByRole('heading', { name: 'Inception' })).toBeInTheDocument();
  expect(
    screen.getByText(/A skilled thief who steals secrets through dream-sharing/)
  ).toBeInTheDocument();
  expect(
    screen.getByTitle('Inception trailer').getAttribute('src')
  ).toBe('https://www.youtube-nocookie.com/embed/YoHD9XEInc0');

  fireEvent.click(screen.getByRole('button', { name: /back to all movies/i }));

  expect(
    screen.getByRole('heading', { name: 'Stories worth staying in for.' })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: 'View Inception details' })
  ).toBeInTheDocument();
});
