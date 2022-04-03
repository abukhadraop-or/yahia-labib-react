import { React, useContext } from 'react';
import PropTypes from 'prop-types';
import List from 'components/styles/List';
import {
  Menu,
  Icon,
  Logo,
  Li,
  Search,
} from 'components/header/mobileHeader/mobile-header.style';
import logo from 'assets/pics/logo.svg';
import menu from 'assets/pics/menu.svg';
import person from 'assets/pics/person.svg';
import search from 'assets/pics/search.svg';
import MovieContext from 'context/moviesContext';
import x from 'assets/pics/x.svg';

/**
 * Handling the Mobile Header.
 *
 * @param {Object} props
 * @param {function} props.showMenu
 *
 * @return {JSX.element}
 */
function MobileHeader(props) {
  const { showMenu } = props;
  const ctx = useContext(MovieContext);

  return (
    <List className="mobile">
      <Li className="menu">
        <Menu src={menu} alt="menu" onClick={showMenu} aria-hidden="true" />
      </Li>
      <Li className="logo">
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
    </List>
  );
}
MobileHeader.defaultProps = {
  showMenu: () => {},
};
MobileHeader.propTypes = {
  showMenu: PropTypes.func,
};
export default MobileHeader;
