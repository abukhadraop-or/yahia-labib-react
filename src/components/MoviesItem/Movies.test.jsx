import React from 'react';
import MoviesItem from 'components/MoviesItem/MoviesItem';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('MoviesItem', () => {
  test('should render title and overview', () => {
    render(
      <MoviesItem
        title="Turning Red"
        overview="Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms"
        image="6DrHO1jr3qVrViUO6s6kFiAGM7.jpg"
      />
    );
    const headingElement = screen.getByTestId(/title/i);
    expect(headingElement).toBeVisible();
    const paraElement = screen.getByTestId('overview');
    expect(paraElement).toBeVisible();
  });
});
