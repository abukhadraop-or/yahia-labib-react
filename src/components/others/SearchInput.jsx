import React, { useContext, useRef } from "react";
import styled from "styled-components";
import MovieContext from "../../context/moviesContext";
import search from "../../assets/pics/search.svg";

const Form = styled.form`
  width: 88%;
  margin: 0 auto;
  display: flex;
  align-content: center;
  .img {
    width: 22.4px;
    filter: grayscale(100%)  brightness(-100%);
  }
  input {
    border: none;
    flex-grow: 1;
    margin: 6px auto
    padding: 6px 10px;
    outline: none;
    font-family: Arial, sans-serif;
    font-style: italic;
    font-size: 100%;
    color: #acacac;
    text-indent: 0;
  }
`;
function SearchInput() {
  const ctx = useContext(MovieContext);
  const searchRef = useRef();
  const { searchBox, searchMovies } = ctx;
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
          <img className="img" src={search} alt="search" />
          <input
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
