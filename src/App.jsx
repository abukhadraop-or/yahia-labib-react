import React, { useState } from 'react';
import styled from 'styled-components';
import MainNavigation from 'components/header/mainHeader/MainNavigation';
import Footer from 'components/footer/Footer';
import MoviesList from 'components/movieList/MoviesList';
import SortMovies from 'components/sort/SortMovies';
import SearchInput from 'components/search/SearchInput';
import MenuMobile from 'components/mobile-menu/MenuMobile';
import GlobalStyle from 'globalStyles';

const Main = styled.main`
  padding: 20px;
  max-width: 1440px;
  margin: 0 auto;
  @media (min-width: 769px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    h2 {
      width: 100%;
      padding: 20px;
    }
  }
`;
function App() {
  const [showMenu, setShowMenu] = useState();
  const showMenuFunc = () => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  return (
    <>
      <GlobalStyle />
      <MainNavigation showMenu={showMenuFunc} />
      <SearchInput />
      {showMenu && <MenuMobile />}
      <Main>
        <h2>Popular Movies</h2>
        <SortMovies />
        <MoviesList />
      </Main>
      <Footer />
    </>
  );
}

export default App;
