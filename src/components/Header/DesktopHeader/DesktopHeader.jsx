import React, { useContext, useState } from 'react';
import {
  Container,
  NavList,
  Logo,
  Search,
  Plus,
  NavItem,
  NavEn,
  NavListTwo,
} from 'components/Header/DesktopHeader/desktop-header.style';
import DesktopModal from 'components/DesktopHeaderModal/DesktopModal';
import logo from 'assets/pics/logo-desktop.svg';
import search from 'assets/pics/search.svg';
import MovieContext from 'context/MoviesContext';
import x from 'assets/pics/x.svg';
import plus from 'assets/pics/plus.svg';
import { data } from 'assets/data/data';

const dataDeterminer = { m: 0, mo: 3, p: 2, t: 1 };

/**
 * Handling the Desktop Header.
 *
 * @return {JSX.element}
 */
function DesktopHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const [dataMenu, setDataMenu] = useState(<ul />);
  const [top, setTop] = useState(0);

  const ctx = useContext(MovieContext);

  /**
   * Determine which header modals should be open.
   *
   * @param {string} list A string to determine which item the user hovered over.
   */
  const openMenu = (list) => {
    setShowMenu(true);
    const chosenData = data[dataDeterminer[list]];
    if (list !== 'c') {
      setDataMenu(chosenData);
      setTop(dataDeterminer[list]);
    } else {
      setShowMenu(false);
    }
  };

  return (
    <Container>
      <NavList>
        <NavItem>
          <Logo src={logo} alt="logo" />
        </NavItem>

        <NavItem
          onMouseEnter={() => openMenu('m')}
          onMouseLeave={() => openMenu('c')}
          aria-hidden="true"
        >
          Movies
          {showMenu && top === 0 && <DesktopModal data={dataMenu} />}
        </NavItem>

        <NavItem
          onMouseEnter={() => openMenu('t')}
          onMouseLeave={() => openMenu('c')}
          aria-hidden="true"
        >
          {showMenu && top === 1 && <DesktopModal data={dataMenu} />}
          TV Shows
        </NavItem>
        <NavItem
          onMouseEnter={() => openMenu('p')}
          onMouseLeave={() => openMenu('c')}
          aria-hidden="true"
        >
          {showMenu && top === 2 && <DesktopModal data={dataMenu} />}
          People
        </NavItem>
        <NavItem
          onMouseEnter={() => openMenu('mo')}
          onMouseLeave={() => openMenu('c')}
          aria-hidden="true"
        >
          {showMenu && top === 3 && <DesktopModal data={dataMenu} />}
          More
        </NavItem>
      </NavList>
      <NavListTwo>
        <NavItem>
          <Plus src={plus} alt="+" />
        </NavItem>

        <NavItem>
          <NavEn>en</NavEn>
        </NavItem>
        <NavItem>Join TMDB</NavItem>
        <NavItem>login</NavItem>
        <NavItem>
          <Search
            onClick={ctx.showSearch}
            aria-hidden="true"
            src={!ctx.searchBox ? search : x}
            alt="search"
            close={ctx.searchBox && 'x'}
          />
        </NavItem>
      </NavListTwo>
    </Container>
  );
}

export default DesktopHeader;
