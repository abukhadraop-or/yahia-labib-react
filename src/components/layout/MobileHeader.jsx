import { React, useContext } from "react";
import PropTypes from "prop-types";
import { ListMobile } from "./headerTags";
import logo from "../../assets/pics/logo.svg";
import menu from "../../assets/pics/menu.svg";
import person from "../../assets/pics/person.svg";
import search from "../../assets/pics/search.svg";
import MovieContext from "../../context/moviesContext";
import x from "../../assets/pics/x.svg";

function MobileHeader(props) {
  const { showMenu } = props;
  const ctx = useContext(MovieContext);
  /**
   * Handle search appearing in the header.
   */
  const searchClick = () => {
    ctx.showSearch();
  };
  /**
   * Handle left menu appearing.
   */
  const menuAppearing = () => {
    showMenu();
  };
  return (
    <ListMobile className="mobile" close={ctx.searchBox && "x"}>
      <li className="menu">
        <img src={menu} alt="menu" onClick={menuAppearing} aria-hidden="true" />
      </li>
      <li className="logo">
        <img src={logo} alt="logo" />
      </li>
      <li className="search">
        <img className="icon" src={person} alt="logo" />
        <img
          onClick={searchClick}
          aria-hidden="true"
          src={!ctx.searchBox ? search : x}
          alt="logo"
        />
      </li>
    </ListMobile>
  );
}
MobileHeader.defaultProps = {
  showMenu: () => {},
};
MobileHeader.propTypes = {
  showMenu: PropTypes.func,
};
export default MobileHeader;
