import React, { useState } from "react";
import PropTypes from "prop-types";
import { Screen, Backdrop, Detail, Dots } from "./movieItemTags";
import Card from "../UI/Card";
import dots from "../../assets/pics/dots.svg";
import noPic from "../../assets/pics/nopic.svg";
import Menu from "../others/Menu";

function MoviesItem(props) {
  const { title, overview, image, date, vote } = props;
  const [showMenu, setShowMenu] = useState(false);
  /**
   * Handling the list on the top of movie card.
   */
  const menuHandler = () => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  return (
    <>
      {showMenu && <Screen onClick={menuHandler} />}
      {showMenu && <Menu />}
      <Card flex relative>
        {showMenu && <Backdrop />}
        <div className="image">
          <img
            src={
              image
                ? `https://image.tmdb.org/t/p/w130_and_h195_bestv2/${image}`
                : noPic
            }
            alt={title}
          />
        </div>
        <Dots onClick={menuHandler}>
          <img src={dots} alt="dots" />
        </Dots>
        <Detail vote={vote}>
          <div>
            <h3>{title}</h3>
            <p>{date}</p>
          </div>
          <div className="vote">
            <div className="voteInter">
              {vote ? (
                <>
                  <p className="vote">{vote * 10}</p>
                  <p className="percent">%</p>
                </>
              ) : (
                <p className="vote">NR</p>
              )}
            </div>
          </div>
          <p className="overview">{overview}</p>
        </Detail>
      </Card>
    </>
  );
}
MoviesItem.defaultProps = {
  title: "",
  overview: "",
  image: "",
  date: "",
  vote: 0,
};
MoviesItem.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
  vote: PropTypes.number,
};
export default MoviesItem;
