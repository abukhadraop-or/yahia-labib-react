import styled from 'styled-components';

export const MobileList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin: 0 auto;
  padding:1.25rem;
  width:100%;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Menu = styled.img`
  filter: invert(100%);
  width: 1.4rem;
`;

export const Logo = styled.img`
  margin-left: calc(50% - 1.75rem);
  width: 3.5rem;
`;

export const Icon = styled.img`
  margin-left: 0.75rem;
  width: 1.4rem;
    ${(props) => {
      if (props.close) {
        return `
        filter: invert(100%);
        height: 6.25rem;
        `;
      }
      if (props.person) {
        return `filter: invert(100%)`;
      }
      return ``;
    }};
`;

export const Li = styled.li`
  width: 33%;
`;

export const Search = styled.li`
  display: flex;
  justify-content: flex-end;
  width: 33%;
`;
