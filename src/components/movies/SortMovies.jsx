/* eslint-disable react/jsx-curly-brace-presence */
import React, { useContext, useRef, useState } from "react";
import MovieContext from "../../context/moviesContext";
import { Button, Select, Filter, Title, Bars } from "./sortTags";
import Card from "../UI/Card";
import arrow from "../../assets/pics/arrow.svg";

function SortMovies() {
  const ctx = useContext(MovieContext);
  const [searchColor, setColor] = useState(false);
  const selectRef = useRef();
  const [showSort, setShowSort] = useState(false);
  const { SortMoviesHandler } = ctx;
  /**
   * Handle the collapse of sort menu.
   */
  const showSortMenu = () => {
    if (showSort) {
      setShowSort(false);
    } else {
      setShowSort(true);
    }
  };
  /**
   * Handle the click on "load more" button.
   */
  const onSearch = (event) => {
    event.preventDefault();
    SortMoviesHandler(selectRef.current.value, 1);
  };
  /**
   * Handle the search button color button and activating it.
   */
  const onChangeSelection = () => {
    setColor(true);
  };
  return (
    <Bars>
      <Card>
        <div onClick={showSortMenu} aria-hidden="true">
          <Title down={showSort}>
            Sort
            <img src={arrow} alt=">" width="20px" />
          </Title>
        </div>
        <Filter disNone={showSort && "disNone"}>
          <h3>Sort Results By</h3>

          <Select
            defaultValue="popularity.desc"
            id="sort_by"
            name="sort"
            ref={selectRef}
            onChange={onChangeSelection}
          >
            <option value="popularity.desc">Popularity Descending</option>
            <option value="popularity.asc">Popularity Ascending</option>
            <option value="vote_average.desc">Rating Descending</option>
            <option value="vote_average.asc">Rating Ascending</option>
            <option value="primary_release_date.desc">
              Release Date Descending
            </option>
            <option value="primary_release_date.asc">
              Release Date Ascending
            </option>
            <option value="title.asc">Title (A-Z)</option>
            <option value="title.desc">Title (Z-A)</option>
          </Select>
        </Filter>
      </Card>
      <Button
        changeColor={searchColor && "Blue"}
        onClick={searchColor ? onSearch : undefined}
      >
        Search
      </Button>
    </Bars>
  );
}
export default SortMovies;
