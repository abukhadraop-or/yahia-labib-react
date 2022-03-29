import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";
import MainNavigation from "./components/layout/MainNavigation";
import Footer from "./components/layout/Footer";
import MoviesList from "./components/movies/MoviesList";
import SortMovies from "./components/movies/SortMovies";
import SearchInput from "./components/others/SearchInput";
import MenuMobile from "./components/layout/MenuMobile";

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
