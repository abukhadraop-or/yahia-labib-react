import styled from 'styled-components';

export const ListUl = styled.ul`
  display: block;
  height: fit-content;
  list-style: none;
  padding-left: 0.13rem;
  width: 11.5rem;
`;

export const ListItem = styled.li`
  color: black;
  font-family: 'Source Sans Pro', Arial, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 22px;
  padding: 0.6rem 1.5rem;
  :hover {
    background-color: #eee;
  }
`;
