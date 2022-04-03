import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Screen,
  Backdrop,
  Detail,
  Dots,
  MenuIcon,
  MovieTitle,
  Para,
  Overview,
  Vote,
  VoteInter,
} from 'components/moviesItem/movieItem.style';
import Card from 'components/styles/Card';
import dots from 'assets/pics/dots.svg';
import noPic from 'assets/pics/nopic.svg';
import Menu from 'components/menu/Menu';

/**
 * Handling the card section for each movie.
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.overview
 * @param {string} props.image
 * @param {string} props.date
 * @param {number} props.vote
 *
 * @return {JSX.element}
 */
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
  /**
   * Handling of closing menu depending on close.
   */
  window.onscroll = () => {
    if (showMenu) {
      setShowMenu(false);
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
          <MenuIcon src={dots} alt="dots" />
        </Dots>
        <Detail vote={vote}>
          <div>
            <MovieTitle>{title}</MovieTitle>
            <Para>{date}</Para>
          </div>
          <Vote vote={vote}>
            <VoteInter>
              {vote ? (
                <>
                  <Para className="vote">{vote * 10}</Para>
                  <Para className="percent">%</Para>
                </>
              ) : (
                <Para className="vote">NR</Para>
              )}
            </VoteInter>
          </Vote>
          <Overview>{overview}</Overview>
        </Detail>
      </Card>
    </>
  );
}
MoviesItem.defaultProps = {
  title: '',
  overview: '',
  image: '',
  date: '',
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
