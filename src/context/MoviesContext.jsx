import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const MovieContext = React.createContext({
  SortMoviesHandler: () => {},
  loadMoreBtn: true,
  moreMovie: () => {},
  movies: [],
  searchBox: false,
  searchMovies: () => {},
  showSearch: () => {},
});

export function MovieContextProvider(props) {
  const [movies, setMovies] = useState([]);
  const [lastUrl, setLastUrl] = useState([]);
  const [searchBox, setSearchBox] = useState(false);
  const [loadMoreBtn, setLoadMoreBtn] = useState(true);

  /**
   * Make GET request.
   *
   * @param {string} url  Request URl.
   */
  const fetchMovies = (url) => {
    fetch(`${url}1`).then((res) => {
      res.json().then((data) => {
        if (data.results.length !== 0) {
          setMovies(data.results);
        } else {
          setMovies(<p>There are no movies that matched your query.</p>);
        }
        if (data.page >= data.total_pages) {
          setLoadMoreBtn(false);
        } else {
          setLoadMoreBtn(true);
        }
      });
    });
  };

  /**
   * prepare url for GET request in the first rendering.
   */
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=4dde450bf3bd777c92f7b936209c0ac8&language=en-US&page=`;
    setLastUrl(url);
    fetchMovies(url);
  }, []);

  /**
   * prepare url depending search query for GET request.
   *
   * @param {string} query  search query.
   */
  const searchMovies = (query) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=4dde450bf3bd777c92f7b936209c0ac8&language=en-US&include_adult=false&query=${query}&page=`;
    setLastUrl(url);
    fetchMovies(url);
  };

  /**
   * prepare url depending search query for GET request.
   *
   * @param {string} sort  sort type.
   */
  const SortMoviesHandler = (sort) => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=4dde450bf3bd777c92f7b936209c0ac8&language=en-US&sort_by=${sort}&include_video=false&page=`;
    setLastUrl(url);
    fetchMovies(url);
  };

  /**
   * prepare url depending search query for GET request.
   *
   * @param {number} page  page number
   */
  const moreMovie = (page) => {
    const url = lastUrl + page;

    fetch(url).then((res) => {
      res.json().then((data) => {
        if (page + 1 >= data.total_pages) {
          setLoadMoreBtn(false);
        }
        setMovies((prev) => [...prev, ...data.results]);
      });
    });
  };

  /**
   * handle search input appearance.
   */
  const showSearch = () => {
    if (searchBox) {
      setSearchBox(false);
    } else {
      setSearchBox(true);
    }
  };

  const { children } = props;
  const values = useMemo(
    () => ({
      SortMoviesHandler,
      loadMoreBtn,
      moreMovie,
      movies,
      searchBox,
      searchMovies,
      showSearch,
    }),
  );
  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
}
MovieContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MovieContext;
