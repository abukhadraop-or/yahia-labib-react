import React, { useContext, useRef, useState } from 'react';
import MovieContext from 'context/MoviesContext';
import {
  Select,
  Filter,
  Title,
  Bars,
  Arrow,
  FilterTitle,
  Option,
} from 'components/Sort/sort.style';
import Button from 'components/SharedComponents/Button';
import Card from 'components/SharedComponents/Card';
import arrow from 'assets/pics/arrow.svg';

/**
 * Handling the sort section.
 *
 * @return {JSX.element}
 */
function SortMovies() {
  const ctx = useContext(MovieContext);
  const [searchColor, setColor] = React.useState(false);
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
   *
   * @param {React.SyntheticEvent} event Event data.
   */
  const onSearch = (event) => {
    event.preventDefault();
    SortMoviesHandler(selectRef.current.value, 1);
    setColor(false);
  };
  return (
    <Bars>
      <Card>
        <>
          <div onClick={showSortMenu} aria-hidden="true">
            <Title>
              Sort
              <Arrow down={showSort} src={arrow} alt=">" />
            </Title>
          </div>
          <Filter disNone={showSort && 'disNone'}>
            <FilterTitle>Sort Results By</FilterTitle>

            <Select
              defaultValue="popularity.desc"
              data-testid="select"
              id="sort_by"
              name="sort"
              ref={selectRef}
              onChange={() => setColor(true)}
            >
              <Option value="popularity.desc">Popularity Descending</Option>
              <Option value="popularity.asc">Popularity Ascending</Option>
              <Option value="vote_average.desc">Rating Descending</Option>
              <Option value="vote_average.asc">Rating Ascending</Option>
              <Option value="primary_release_date.desc">
                Release Date Descending
              </Option>
              <Option value="primary_release_date.asc">
                Release Date Ascending
              </Option>
              <Option value="title.asc">Title (A-Z)</Option>
              <Option value="title.desc">Title (Z-A)</Option>
            </Select>
          </Filter>
        </>
      </Card>
      <Button
        changeColor={searchColor ? 'Blue' : ''}
        onClick={onSearch}
      >
        Search
      </Button>
    </Bars>
  );
}

export default SortMovies;
