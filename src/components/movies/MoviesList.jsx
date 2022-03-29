import React, { useContext } from "react";
import MovieContext from "../../context/moviesContext";
import MoviesItem from "./MoviesItem";
import Button from "../UI/Button";
import { ListMovie, Item } from "./movieItemTags";

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
