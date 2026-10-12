import { act, fireEvent, render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => {
  jest.useRealTimers();
});

test('shows and hides the profile when the button is toggled', () => {
  render(<App />);

  expect(screen.queryByRole('heading', { name: 'Alex Morgan' })).toBeNull();
  expect(screen.getByText('Time since this component mounted')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /show profile/i }));

  expect(screen.getByRole('heading', { name: 'Alex Morgan' })).toBeInTheDocument();
  expect(screen.getByText('Product Designer')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /hide profile/i })).toHaveAttribute(
    'aria-expanded',
    'true'
  );

  fireEvent.click(screen.getByRole('button', { name: /hide profile/i }));
  expect(screen.queryByRole('heading', { name: 'Alex Morgan' })).toBeNull();
});

test('updates the elapsed time using its mount interval', () => {
  jest.useFakeTimers();
  render(<App />);

  expect(screen.getByText('0m 00s')).toBeInTheDocument();

  act(() => {
    jest.advanceTimersByTime(3000);
  });

  expect(screen.getByText('0m 03s')).toBeInTheDocument();
});
