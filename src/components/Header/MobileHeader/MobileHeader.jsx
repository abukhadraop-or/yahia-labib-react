import { React, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Menu,
  Icon,
  Logo,
  Li,
  Search,
  MobileList,
} from 'components/Header/MobileHeader/mobile-header.style';
import logo from 'assets/pics/logo.svg';
import menu from 'assets/pics/menu.svg';
import person from 'assets/pics/person.svg';
import search from 'assets/pics/search.svg';
import MovieContext from 'context/MoviesContext';
import x from 'assets/pics/x.svg';

/**
 * Handling the Mobile Header.
 *
 * @param {Object} props
 * @param {function} props.showMenu The function that control appearing of mobile left menu.
 *
 * @return {JSX.element}
 */
function MobileHeader({ showMenu }) {
  const ctx = useContext(MovieContext);

  return (
    <MobileList>
      <Li>
        <Menu src={menu} alt="menu" onClick={showMenu} aria-hidden="true" />
      </Li>
      <Li>
        <Logo src={logo} alt="logo" />
      </Li>
      <Search>
        <Icon person src={person} alt="logo" />
        <Icon
          close={ctx.searchBox}
          onClick={ctx.showSearch}
          aria-hidden="true"
          src={!ctx.searchBox ? search : x}
          alt="logo"
        />
      </Search>
    </MobileList>
  );
}

MobileHeader.defaultProps = {
  showMenu: () => {},
};

MobileHeader.propTypes = {
  showMenu: PropTypes.func,
};

export default MobileHeader;
