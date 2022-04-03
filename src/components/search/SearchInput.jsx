import React, { useContext, useRef } from 'react';
import { Form, Icon, Input } from 'components/search/search.style';
import MovieContext from 'context/moviesContext';
import search from 'assets/pics/search.svg';

/**
 * Handling the search section.
 *
 * @return {JSX.element}
 */
function SearchInput() {
  const ctx = useContext(MovieContext);
  const searchRef = useRef();
  const { searchBox, searchMovies } = ctx;

  /**
 * getting the query from user.
 *
 * @return {JSX.element}
 */
  const onSearching = (event) => {
    if (event.which === 13) {
      event.preventDefault();
      searchMovies(searchRef.current.value);
    }
  };
  return (
    <div>
      {searchBox && (
        <Form id="search_form" action="/search" method="get">
          <Icon className="img" src={search} alt="search" />
          <Input
            placeholder="Search for a movie, tv show, person..."
            ref={searchRef}
            onKeyPress={onSearching}
            name="search"
          />
        </Form>
      )}
    </div>
  );
}

export default SearchInput;
