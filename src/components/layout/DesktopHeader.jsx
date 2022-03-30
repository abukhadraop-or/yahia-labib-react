import React, { useContext } from "react";
import { Container } from "./headerTags";
import logo from "../../assets/pics/logo-desktop.svg";
import search from "../../assets/pics/search.svg";
import MovieContext from "../../context/moviesContext";
import x from "../../assets/pics/x.svg";
import plus from "../../assets/pics/plus.svg";

function DesktopHeader() {
  const ctx = useContext(MovieContext);
  /**
   * Handle onClick event.
   */
  const searchClick = () => {
    ctx.showSearch();
  };
  return (
    <Container className="desktop" close={ctx.searchBox && "x"}>
      <ul className="partOne">
        <li className="logo">
          <img src={logo} alt="logo" />
        </li>
        <li>Movies</li>
        <li>TV Shows</li>
        <li>People</li>
        <li>More</li>
      </ul>
      <ul className="partTwo">
        <li className="plus">
          <img src={plus} alt="+" />
        </li>

        <li className="en">
          <div>en</div>
        </li>
        <li>Join TMDB</li>
        <li>login</li>
        <li className="search">
          <img
            onClick={searchClick}
            aria-hidden="true"
            src={!ctx.searchBox ? search : x}
            alt="logo"
          />
        </li>
      </ul>
    </Container>
  );
}

export default DesktopHeader;
