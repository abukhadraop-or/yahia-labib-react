import React from 'react';
import MoviesList from 'components/MovieList/MoviesList';
import '@testing-library/jest-dom/extend-expect';
import { mockData, mockData2 } from 'assets/data/mock';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MovieContextProvider } from 'context/MoviesContext';

describe('MoviesList', () => {
  afterEach(() => {
    cleanup();
  });
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

  test('should render More Movie button', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => mockData,
    });
    render(
      <MovieContextProvider>
        <MoviesList />
      </MovieContextProvider>
    );
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => mockData2,
    });
    const btnElement = screen.getByRole('button');
    fireEvent.click(btnElement);
    const elements = await screen.findAllByRole('listitem');
    expect(elements.length).toBeGreaterThan(4);
  });
  test('should not render movies', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => ({ results: [] }),
    });
    render(
      
        <MoviesList />
    );
    const element = screen.queryAllByRole('listitem');
    expect(element.length).toBe(0);
  });
});
