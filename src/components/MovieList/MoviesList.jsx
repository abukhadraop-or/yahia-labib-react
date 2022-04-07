import React, { useContext } from 'react';
import MovieContext from 'context/MoviesContext';
import MoviesItem from 'components/MoviesItem/MoviesItem';
import Button from 'components/SharedComponents/Button';
import { ListMovie, Item } from 'components/MovieList/movie-list.style';

/**
 * Handling display of all movies as list of cards.
 *
 * @return {JSX.element}
 */
function MoviesList() {
  const ctx = useContext(MovieContext);
  const { loadMoreBtn, movies, moreMovie } = ctx;

  /**
   * Handle the click on "load more" button.
   */
  const loadMore = () => {
    const count = Math.ceil(movies.length / 20) + 1;
    moreMovie(count);
  };

  return (
    <ListMovie>
      {Array.isArray(movies)
        ? movies.map((movie) => (
            <Item key={movie.id}>
              <MoviesItem
                length={movies.length}
                title={movie.title}
                overview={movie.overview}
                image={movie.poster_path}
                date={movie.release_date}
                vote={movie.vote_average}
              />
            </Item>
          ))
        : movies}

      {loadMoreBtn && (
        <Button rad="0.5em" changeColor="Blue" onClick={loadMore}>
          Load More
        </Button>
      )}
    </ListMovie>
  );
}

export default MoviesList;
