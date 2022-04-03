import styled from 'styled-components';

export const ListItem = styled.p`
  padding: 8px 20px;
  margin: 0;
  &.hover {
    color: #666;
    font-weight: bold;
  }
  &.hover:hover {
    background-color: #032541;
    color: #fff;
  }
`;

export const Image = styled.img`
  filter: invert(100%);
  width: 20px;
`;
