import React from 'react';
import MoviesList from 'components/MovieList/MoviesList';
import '@testing-library/jest-dom/extend-expect';
import mockData from 'assets/data/mock';
import { render, screen } from '@testing-library/react';
import { MovieContextProvider } from 'context/MoviesContext';

describe('MoviesList', () => {
  test('should render movies', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => mockData,
    });
    render(
      <MovieContextProvider>
        <MoviesList />
      </MovieContextProvider>
    );
    const elements = await screen.findAllByRole('listitem');
    expect(elements.length).toBe(3);
  });
});
