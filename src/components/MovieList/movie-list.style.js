import styled from 'styled-components';

export const ListMovie = styled.ul`
  --numberOfDiscoverColumns: 1;
  --discoverColumnPadding: 30px;

  @media only screen and (min-width: 700px) {
    --numberOfDiscoverColumns: 2;
  }

  @media only screen and (min-width: 900px) {
    --numberOfDiscoverColumns: 3;
  }

  @media only screen and (min-width: 1040px) {
    --numberOfDiscoverColumns: 4;
  }

  @media only screen and (min-width: 1240px) {
    --numberOfDiscoverColumns: 5;
  }

  justify-content: space-evenly;
  list-style-type: none;
  padding: 0;
  width: 100%;
  @media (min-width: 769px) {
    align-content: center;
    display: flex;
    flex-wrap: wrap;
    width: calc(99% - 16.25rem);
  }
`;

export const Item = styled.li`
  @media (min-width: 769px) {
    display: flex;
    margin: 0 1%;
    width: calc(85% / var(--numberOfDiscoverColumns));
  }
`;
