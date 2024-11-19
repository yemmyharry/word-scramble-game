import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Game from '../components/Game';

describe('Game Component', () => {
  test('renders without crashing', () => {
    render(<Game />);
    expect(screen.getByText('Time Remaining: 60s')).toBeInTheDocument();
  });

  test('displays scrambled word', () => {
    render(<Game />);
    expect(screen.getByText(/Scrambled Word:/)).toBeInTheDocument();
  });

  test('accepts user input', () => {
    render(<Game />);
    const input = screen.getByPlaceholderText('Enter your guess');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
  });
});