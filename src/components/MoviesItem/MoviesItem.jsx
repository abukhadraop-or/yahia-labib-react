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
  ParaVote,
  ParaPercent,
  MImage,
} from 'components/MoviesItem/movie-item.style';
import Card from 'components/SharedComponents/Card';
import dots from 'assets/pics/dots.svg';
import noPic from 'assets/pics/nopic.svg';
import Menu from 'components/Menu/Menu';

/**
 * Handling the card section for each movie.
 *
 * @param {Object} props props.
 * @param {string} props.title movie title.
 * @param {string} props.overview movie overview.
 * @param {string} props.image movie image url.
 * @param {string} props.date movie released date.
 * @param {number} props.vote movie average vote.
 *
 * @return {JSX.element}
 */
function MoviesItem({ title, overview, image, date, vote }) {
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
        <>
          {showMenu && <Backdrop />}
          <div>
            <MImage
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
              <MovieTitle data-testid="title">{title}</MovieTitle>
              <Para>{date}</Para>
            </div>
            <Vote vote={vote}>
              <VoteInter>
                {vote ? (
                  <>
                    <ParaVote>{vote * 10}</ParaVote>
                    <ParaPercent>%</ParaPercent>
                  </>
                ) : (
                  <ParaVote>NR</ParaVote>
                )}
              </VoteInter>
            </Vote>
            <Overview data-testid="overview">{overview}</Overview>
          </Detail>
        </>
      </Card>
    </>
  );
}
MoviesItem.defaultProps = {
  date: '',
  image: '',
  overview: '',
  title: '',
  vote: 0,
};
MoviesItem.propTypes = {
  date: PropTypes.string,
  image: PropTypes.string,
  overview: PropTypes.string,
  title: PropTypes.string,
  vote: PropTypes.number,
};
export default MoviesItem;
