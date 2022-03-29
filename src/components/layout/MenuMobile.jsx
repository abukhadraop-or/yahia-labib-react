import React, { useState } from "react";
import { Menu } from "./headerTags";

export default function MenuMobile() {
  const [movieListShow, setMovieListShow] = useState(true);
  const [tvListShow, setTvListShow] = useState(true);
  const [peopleListShow, setPeopleListShow] = useState(true);
  /**
   * Handling collapse of lists.
   *
   * @param {string} list a string to determine which list was clicked.
   */
  const collapse = (list) => {
    switch (list) {
      case "m":
        if (movieListShow) {
          setMovieListShow(false);
        } else {
          setMovieListShow(true);
        }
        break;
      case "t":
        if (tvListShow) {
          setTvListShow(false);
        } else {
          setTvListShow(true);
        }
        break;
      default:
        if (peopleListShow) {
          setPeopleListShow(false);
        } else {
          setPeopleListShow(true);
        }
        break;
    }
  };

  return (
    <Menu>
      <ul>
        <li onClick={() => collapse("m")} aria-hidden="true">
          <h4>Movies</h4>
          <ul className={movieListShow && "hide"}>
            <li>
              <a href="/movie">Popular</a>
            </li>
            <li>
              <a href="/movie/top-rated">Top Rated</a>
            </li>
            <li>
              <a href="/movie/upcoming">Upcoming</a>
            </li>
            <li>
              <a href="/movie/now-playing">Now Playing</a>
            </li>
          </ul>
        </li>
        <li onClick={() => collapse("t")} aria-hidden="true">
          <h4 href="/tv">TV Shows</h4>
          <ul className={tvListShow && "hide"}>
            <li>
              <a href="/tv">Popular</a>
            </li>
            <li>
              <a href="/tv/top-rated">Top Rated</a>
            </li>
            <li>
              <a href="/tv/on-the-air">On TV</a>
            </li>
            <li>
              <a href="/tv/airing-today">Airing Today</a>
            </li>
          </ul>
        </li>
        <li onClick={() => collapse("p")} aria-hidden="true">
          <h4>People</h4>
          <ul className={peopleListShow && "hide"}>
            <li>
              <a href="/person">Popular People</a>
            </li>
          </ul>
        </li>
      </ul>

      <ul className="bottom">
        <li>
          <a href="/bible">Contribution Bible</a>
        </li>
        <li>
          <a href="/apps">Apps</a>
        </li>
        <li>
          <a href="/discuss">Discussions</a>
        </li>
        <li>
          <a href="/leaderboard">Leaderboard</a>
        </li>
        <li>
          <a href="/contribute">Contribute</a>
        </li>
        <li>
          <a href="/documentation/api">API</a>
        </li>
        <li>
          <a href="/talk">Support</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>

      <ul className="login">
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </Menu>
  );
}
