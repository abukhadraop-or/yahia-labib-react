import React, { useState } from 'react';
import { Menu, Ul, Head, Li } from 'components/MobileMenu/mobile-menu.style';
import { mobileMenuData } from 'assets/data/data';

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
   * @param {string} list a string that determine which list was clicked.
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

  /**
   * Handling the data should render.
   *
   * @param {Array} data Contains the texts of the lists.
   *
   * @return {JSX.element}
   */
  const getList = (data) => data.map((item) => <Li key={item}>{item}</Li>);

  return (
    <Menu>
      <Ul>
        <Li onClick={() => collapse('m')} aria-hidden="true">
          <Head>Movies</Head>
          <Ul hide={movieListShow ? 'hide' : ''}>
            {getList(mobileMenuData[0])}
          </Ul>
        </Li>
        <Li onClick={() => collapse('t')} aria-hidden="true">
          <Head href="/tv">TV Shows</Head>
          <Ul hide={tvListShow ? 'hide' : ''}>{getList(mobileMenuData[0])}</Ul>
        </Li>
        <Li onClick={() => collapse('p')} aria-hidden="true">
          <Head>People</Head>
          <Ul hide={peopleListShow ? 'hide' : ''}>
            <Li>Popular People</Li>
          </Ul>
        </Li>
      </Ul>
      <Ul>{getList(mobileMenuData[1])}</Ul>
      <Ul>
        <Li>Login</Li>
      </Ul>
    </Menu>
  );
}
