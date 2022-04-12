import React from 'react';
import SortMovies from 'components/Sort/SortMovies';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('SortMovies', () => {
  test('should have a sort heading', () => {
    render(<SortMovies />);
    const headingElement = screen.getByText('Sort');
    expect(headingElement).toBeInTheDocument();
  });

  test('should render the sort options after clicking on Sort', () => {
    render(<SortMovies />);
    const headingElement = screen.getByText('Sort');
    fireEvent.click(headingElement);
    const headElement = screen.getByText('Sort Results By');
    const selectElement = screen.getByTestId('select');
    expect(selectElement).toBeVisible();
    expect(headElement).toBeVisible();
  });
  test('should send', () => {
    render(<SortMovies />);
    const headingElement = screen.getByText('Sort');
    expect(headingElement).toBeInTheDocument();
  });
});
