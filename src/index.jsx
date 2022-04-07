import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MovieContextProvider } from './context/MoviesContext';

ReactDOM.render(
  <MovieContextProvider>
    <App />
  </MovieContextProvider>,
  document.getElementById('root')
);