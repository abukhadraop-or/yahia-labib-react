import styled from 'styled-components';

export const ListMovie = styled.ul`
  justify-content: space-evenly;
  list-style-type: none;
  padding:0;
  width:100%;
  @media (min-width: 769px){
    align-content: center;
    display:flex;
    flex-wrap:wrap;
    width:calc(99% - 16.25rem);
  }
`;

export const Item = styled.li`
  @media (min-width: 769px) {
    display: flex;
    margin: 0 1%;
    width: calc(85% / var(--numberOfDiscoverColumns));
  }
`;
