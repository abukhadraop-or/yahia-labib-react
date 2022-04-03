import React, { useState } from 'react';
import { Menu, Ul, Head, Li } from 'components/mobile-menu/mobile-menu.style';

/**
 * Handling the mobile right menu.
 *
 * @return {JSX.element}
 */
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
      case 'm':
        if (movieListShow) {
          setMovieListShow(false);
        } else {
          setMovieListShow(true);
        }
        break;
      case 't':
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
      <Ul>
        <Li onClick={() => collapse('m')} aria-hidden="true">
          <Head>Movies</Head>
          <Ul className={movieListShow && 'hide'}>
            <Li>
              <a href="/movie">Popular</a>
            </Li>
            <Li>
              <a href="/movie/top-rated">Top Rated</a>
            </Li>
            <Li>
              <a href="/movie/upcoming">Upcoming</a>
            </Li>
            <Li>
              <a href="/movie/now-playing">Now Playing</a>
            </Li>
          </Ul>
        </Li>
        <Li onClick={() => collapse('t')} aria-hidden="true">
          <Head href="/tv">TV Shows</Head>
          <Ul className={tvListShow && 'hide'}>
            <Li>
              <a href="/tv">Popular</a>
            </Li>
            <Li>
              <a href="/tv/top-rated">Top Rated</a>
            </Li>
            <Li>
              <a href="/tv/on-the-air">On TV</a>
            </Li>
            <Li>
              <a href="/tv/airing-today">Airing Today</a>
            </Li>
          </Ul>
        </Li>
        <Li onClick={() => collapse('p')} aria-hidden="true">
          <Head>People</Head>
          <Ul className={peopleListShow && 'hide'}>
            <Li>
              <a href="/person">Popular People</a>
            </Li>
          </Ul>
        </Li>
      </Ul>

      <Ul className="bottom">
        <Li>
          <a href="/bible">Contribution Bible</a>
        </Li>
        <Li>
          <a color="gray" href="/apps">
            Apps
          </a>
        </Li>
        <Li>
          <a color="gray" href="/discuss">
            Discussions
          </a>
        </Li>
        <Li>
          <a color="gray" href="/leaderboard">
            Leaderboard
          </a>
        </Li>
        <Li>
          <a color="gray" href="/contribute">
            Contribute
          </a>
        </Li>
        <Li>
          <a color="gray" href="/documentation/api">
            API
          </a>
        </Li>
        <Li>
          <a color="gray" href="/talk">
            Support
          </a>
        </Li>
        <Li>
          <a color="gray" href="/about">
            About
          </a>
        </Li>
      </Ul>

      <Ul className="login">
        <Li>
          <a href="/login">Login</a>
        </Li>
      </Ul>
    </Menu>
  );
}
