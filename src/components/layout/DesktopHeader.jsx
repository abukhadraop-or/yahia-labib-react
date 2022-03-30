import React, { useContext, useState } from "react";
import { Container } from "./headerTags";
import DesktopModal from "./DesktopModal";
import logo from "../../assets/pics/logo-desktop.svg";
import search from "../../assets/pics/search.svg";
import MovieContext from "../../context/moviesContext";
import x from "../../assets/pics/x.svg";
import plus from "../../assets/pics/plus.svg";
import { data } from "../../assets/data/data";

function DesktopHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const [dataMenu, setDataMenu] = useState(<ul />);
  const [top, setTop] = useState(0);

  const ctx = useContext(MovieContext);
  /**
   * Handle onClick event.
   */
  const searchClick = () => {
    ctx.showSearch();
  };
  const openMenu = (list) => {
    setShowMenu(true);
    switch (list) {
      case "m":
        setDataMenu(data[0]);
        setTop(0);
        break;
      case "t":
        setDataMenu(data[1]);
        setTop(1);
        break;
      case "p":
        setDataMenu(data[2]);
        setTop(2);
        break;
      case "mo":
        setDataMenu(data[3]);
        setTop(3);
        break;
      case "c":
        setShowMenu(false);
        break;
      default:
        break;
    }
  };
  return (
    // <>
    //   {showMenu && (
    //     <DesktopModal
    //       onMouseEnter={() => openMenu("")}
    //       onMouseLeave={() => openMenu("c")}
    //       data={dataMenu}
    //     />
    //   )}
    <Container className="desktop" close={ctx.searchBox && "x"}>
      <ul className="partOne">
        <li className="logo">
          <img src={logo} alt="logo" />
        </li>

        <li
          onMouseEnter={() => openMenu("m")}
          onMouseLeave={() => openMenu("c")}
          aria-hidden="true"
        >
          Movies
          {showMenu && top === 0 && <DesktopModal data={dataMenu} />}
        </li>

        <li
          onMouseEnter={() => openMenu("t")}
          onMouseLeave={() => openMenu("c")}
          aria-hidden="true"
        >
          {showMenu && top === 1 && <DesktopModal data={dataMenu} />}
          TV Shows
        </li>
        <li
          onMouseEnter={() => openMenu("p")}
          onMouseLeave={() => openMenu("c")}
          aria-hidden="true"
        >
          {showMenu && top === 2 && <DesktopModal data={dataMenu} />}
          People
        </li>
        <li
          onMouseEnter={() => openMenu("mo")}
          onMouseLeave={() => openMenu("c")}
          aria-hidden="true"
        >
          {showMenu && top === 3 && <DesktopModal data={dataMenu} />}
          More
        </li>
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
    // </>
  );
}

export default DesktopHeader;
